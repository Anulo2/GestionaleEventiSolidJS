import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import validator from "validator";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarDaysIcon as CalendarIcon } from "@heroicons/react/24/outline";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { it } from "date-fns/locale";
import { toast } from "@/components/ui/use-toast";

function Iscrizione() {
	const formSchema = z.object({
		nome_bimbo: z.string().min(2, {
			message: "Il nome deve essere lungo almeno 2 caratteri",
		}),
		cognome_bimbo: z.string().min(2, {
			message: "Il cognome deve essere lungo almeno 2 caratteri",
		}),
		data_nascita_bimbo: z.date({
			required_error: "La data di nascita è obbligatoria",
			invalid_type_error: "La data di nascita deve essere una data",
		}),
		residenza_bimbo: z.string().min(5, {
			message: "La residenza deve essere lunga almeno 5 caratteri",
		}),
		luogo_nascita_bimbo: z.string().min(5, {
			message: "Il luogo di nascita deve essere lungo almeno 5 caratteri",
		}),
		codice_fiscale_bimbo: z.string().length(16, {
			message: "Il codice fiscale deve essere lungo 16 caratteri",
		}),
		iscritto_noi_bimbo: z.boolean({
			required_error: "Devi specificare se il bimbo è iscritto al NOI",
			invalid_type_error: "Il valore deve essere booleano",
		}),
		genitori: z
			.array(
				z
					.object({
						nome_genitore: z.string().min(2, {
							message: "Il nome deve essere lungo almeno 2 caratteri",
						}),
						cognome_genitore: z.string().min(2, {
							message: "Il cognome deve essere lungo almeno 2 caratteri",
						}),
					})
					.required(),
			)
			.length(2, {
				message: "Devi specificare due genitori",
			}),
		contatti: z
			.array(
				z
					.object({
						nome_contatto: z.string().min(2, {
							message: "Il nome deve essere lungo almeno 2 caratteri",
						}),
						cognome_contatto: z.string().min(2, {
							message: "Il cognome deve essere lungo almeno 2 caratteri",
						}),
						telefono_contatto: z
							.string()
							.refine(
								validator.isMobilePhone,
								"Il numero di telefono non è valido",
							),
						ruolo_contatto: z.string().min(2, {
							message: "Il ruolo deve essere lungo almeno 2 caratteri",
						}),
					})
					.required(),
			)
			.min(2, {
				message: "Devi specificare almeno due contatti",
			}),
		privacy_foto: z.boolean({
			required_error: "Devi specificare se accetti la privacy delle foto",
			invalid_type_error: "Il valore deve essere booleano",
		}),
		privacy_policy: z.literal(true, {
			required_error: "Devi accettare la privacy policy",
			invalid_type_error: "Il valore deve essere true",
			message: "Devi accettare la privacy policy",
		}),
	});
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			nome_bimbo: "",
			cognome_bimbo: "",
			data_nascita_bimbo: "",
			residenza_bimbo: "",
			luogo_nascita_bimbo: "",
			codice_fiscale_bimbo: "",
			iscritto_noi_bimbo: false,
			genitori: [
				{
					nome_genitore: "",
					cognome_genitore: "",
				},
				{
					nome_genitore: "",
					cognome_genitore: "",
				},
			],
			contatti: [
				{
					nome_contatto: "",
					cognome_contatto: "",
					telefono_contatto: "",
					ruolo_contatto: "",
				},
				{
					nome_contatto: "",
					cognome_contatto: "",
					telefono_contatto: "",
					ruolo_contatto: "",
				},
			],
			privacy_foto: false,
			privacy_policy: false,
		},
	});
	function onSubmit(values) {
		console.log(values);
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-wrap gap-4"
			>
				<TextInput
					form={form}
					field_name="nome_bimbo"
					label="Nome"
					placeholder="Nome"
					description="Nome figlio/a"
				/>
				<TextInput
					form={form}
					field_name="cognome_bimbo"
					label="Cognome"
					placeholder="Cognome"
					description="Cognome figlio/a"
				/>
				<DateInput
					form={form}
					field_name="data_nascita_bimbo"
					label="Data di nascita"
					description="Data di nascita figlio/a"
				/>
				<TextInput
					form={form}
					field_name="residenza_bimbo"
					label="Residenza"
					placeholder="Residenza"
					description="Residenza figlio/a"
				/>
				<TextInput
					form={form}
					field_name="luogo_nascita_bimbo"
					label="Luogo di nascita"
					placeholder="Luogo di nascita"
					description="Luogo di nascita figlio/a"
				/>
				<TextInput
					form={form}
					field_name="codice_fiscale_bimbo"
					label="Codice fiscale"
					placeholder="Codice fiscale"
					description="Codice fiscale figlio/a"
				/>
				<BooleanInput
					form={form}
					field_name="iscritto_noi_bimbo"
					label="Iscritto al NOI"
					description="Il figlio/a è iscritto al NOI?"
				/>
				<ParentInputs form={form} />
				<ContattiInputs form={form} />
				<BooleanInput
					form={form}
					field_name="privacy_foto"
					label="Accetta privacy foto"
					description="Accetti la privacy delle foto?"
				/>
				<BooleanInput
					form={form}
					field_name="privacy_policy"
					label="Accetta privacy policy"
					description="Accetti la privacy policy?"
				/>
				<Button type="submit">Iscrivi</Button>
			</form>
		</Form>
	);
}

function ContattiInputs({ form }) {
	const { fields, append, remove } = useFieldArray({
		control: form.control,
		name: "contatti",
	});

	return (
		<>
			{fields.map((item, index) => (
				<div key={item.id} className="space-y-4">
					<TextInput
						form={form}
						field_name={`contatti.${index}.nome_contatto`}
						label={`Nome Contatto ${index + 1}`}
						placeholder="Nome"
						description="Nome contatto"
					/>
					<TextInput
						form={form}
						field_name={`contatti.${index}.cognome_contatto`}
						label={`Cognome Contatto ${index + 1}`}
						placeholder="Cognome"
						description="Cognome contatto"
					/>
					<TextInput
						form={form}
						field_name={`contatti.${index}.telefono_contatto`}
						label={`Telefono Contatto ${index + 1}`}
						placeholder="Telefono"
						description="Telefono contatto"
					/>
					<TextInput
						form={form}
						field_name={`contatti.${index}.ruolo_contatto`}
						label={`Ruolo Contatto ${index + 1}`}
						placeholder="Ruolo"
						description="Ruolo contatto"
					/>
					<Button type="button" onClick={() => remove(index)}>
						Rimuovi contatto
					</Button>
				</div>
			))}
			<Button
				type="button"
				onClick={() =>
					append({
						nome_contatto: "",
						cognome_contatto: "",
						telefono_contatto: "",
						ruolo_contatto: "",
					})
				}
			>
				Aggiungi contatto
			</Button>
		</>
	);
}

function ParentInputs({ form }) {
	const { fields, append, remove } = useFieldArray({
		control: form.control,
		name: "genitori",
	});

	return (
		<>
			{fields.map((item, index) => (
				<div key={item.id} className="space-y-4">
					<TextInput
						form={form}
						field_name={`genitori.${index}.nome_genitore`}
						label={`Nome Genitore ${index + 1}`}
						placeholder="Nome"
						description="Nome genitore"
					/>
					<TextInput
						form={form}
						field_name={`genitori.${index}.cognome_genitore`}
						label={`Cognome Genitore ${index + 1}`}
						placeholder="Cognome"
						description="Cognome genitore"
					/>
				</div>
			))}
		</>
	);
}

function BooleanInput({ form, field_name, label, description }) {
	return (
		<FormField
			control={form.control}
			name={field_name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Switch checked={field.value} onCheckedChange={field.onChange} />
					</FormControl>
					<FormDescription>{description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}

function DateInput({ form, field_name, label, description }) {
	return (
		<FormField
			control={form.control}
			name={field_name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<Popover>
						<PopoverTrigger asChild>
							<FormControl>
								<Button
									variant={"outline"}
									className={cn(
										"w-[240px] pl-3 text-left font-normal",
										!field.value && "text-muted-foreground",
									)}
								>
									{field.value ? (
										format(field.value, "dd/MM/yyyy")
									) : (
										<span>Seleziona una data</span>
									)}
									<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
								</Button>
							</FormControl>
						</PopoverTrigger>
						<PopoverContent className="w-auto p-0" align="start">
							<Calendar
								locale={it}
								mode="single"
								selected={field.value}
								onSelect={field.onChange}
								disabled={(date) =>
									date > new Date() || date < new Date("1900-01-01")
								}
								initialFocus
							/>
						</PopoverContent>
					</Popover>
					<FormDescription>{description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}

function TextInput({ form, field_name, label, placeholder, description }) {
	return (
		<FormField
			control={form.control}
			name={field_name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input placeholder={placeholder} {...field} />
					</FormControl>
					<FormDescription>{description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}

export default Iscrizione;
