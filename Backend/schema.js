import { sql } from "drizzle-orm";
import {
	pgTable,
	serial,
	text,
	integer,
	smallint,
	smallserial,
	varchar,
	bigint,
	bigserial,
	json,
	boolean,
	timestamp,
	index,
	uniqueIndex,
} from "drizzle-orm/pg-core";

/*
Requisiti:

Bimbo può partecipare a più eventi
Per ogni evento bimbo deve avere almeno 1 genitore che iscrive bimbo
Per ogni evento bimbo deve avere almeno 1 contatto
Per ogni evento 1 mail di riferimento dell'iscrizione
Ogni evento almeno 1 organizzatore/responsabile
Ogni iscrizione ad evento deve aver accettato privacy policy + privacy foto (opzionale)
Ogni iscrizione ad evento deve avere timestamp di avvenimento
Ogni iscrizione deve avere documento identità bimbo + gruppo sanguigneo +
 allergie + patologie. Questi dati devono essere dissociati dalla tabella bimbo
 per eliminarli a fine evento (durante l'evento saranno ricondubili al bimbo)
Ogni iscrizione deve avere un campo note per eventuali informazioni aggiuntive
Ogni iscrizione deve avere un campo per il pagamento dell'evento
Ogni bimbo deve avere una flag per segnare se è iscritto al NOI
Ogni evento deve specificare un sottodominio dove sarà disponibile la pag di iscrizione
*/


export const evento = pgTable('evento', {
	id: serial().primaryKey(),
	nome: text('nome'),
	descrizione: text('descrizione'),
	data_inizio: timestamp('data_inizio'),
	data_fine: timestamp('data_fine'),
	luogo: text('luogo'), // TODO: migrate this to postgis when available
	sottodominio: text('sottodominio').unique(),
	privacy_policy: text('privacy_policy'),
	privacy_foto: text('privacy_foto'),
	organizzatori: json('organizzatori'),
	privacy_foto_necessaria: boolean('privacy_foto_necessaria').default(true),
}
)

export const bimbo = pgTable('bimbo', {
	id: serial().primaryKey(),
	nome: text('nome'),
	cognome: text('cognome'),
	data_nascita: timestamp('data_nascita'),
	residenza: text('residenza'),
	luogo_nascita: text('luogo_nascita'),
	note_interne: text('note_interne'),
	codice_fiscale: text('codice_fiscale'),
	iscritto_noi: boolean('iscritto_noi').default(false),
}
)

export const genitore = pgTable('genitore', {
	id: serial().primaryKey(),
	nome: text('nome'),
	cognome: text('cognome'),
}
)

export const contatto = pgTable('contatto', {
	id: serial().primaryKey(),
	nome: text('nome'),
	cognome: text('cognome'),
	telefono: text('telefono'),
	ruolo: text('ruolo'),
}
)

export const iscrizione = pgTable('iscrizione', {
	id: serial('id').primaryKey(),
	evento_id: integer('evento_id').references(() => evento.id).notNull(),
	bimbo_id: integer('bimbo_id').references(() => bimbo.id).notNull(),
	mail_riferimento: text('mail_riferimento').notNull(),
	privacy_policy_accettata: boolean('privacy_policy_accettata').notNull(),
	privacy_foto_accettata: boolean('privacy_foto_accettata'),
	timestamp_iscrizione: timestamp('timestamp_iscrizione').defaultNow().notNull(),
	note: text('note'),
	pagamento: boolean('pagamento').notNull(),
	is_completed: boolean('is_completed').default(false).notNull()
});

export const emailVerification = pgTable('email_verification', {
	token: serial('token').primaryKey(),
	iscrizione_id: integer('iscrizione_id').references(() => iscrizione.id).notNull(),
	expires_at: timestamp('expires_at').notNull(),
	is_used: boolean('is_used').default(false).notNull(),
})

export const iscrizioneGenitore = pgTable('iscrizione_genitore', {
	id: serial('id').primaryKey(),
	iscrizione_id: integer('iscrizione_id').references(() => iscrizione.id).notNull(),
	genitore_id: integer('genitore_id').references(() => genitore.id).notNull()
});

export const iscrizioneContatto = pgTable('iscrizione_contatto', {
	id: serial('id').primaryKey(),
	iscrizione_id: integer('iscrizione_id').references(() => iscrizione.id).notNull(),
	contatto_id: integer('contatto_id').references(() => contatto.id).notNull()
});

export const datiMedici = pgTable('dati_medici', {
	id: serial('id').primaryKey(),
	iscrizione_id: integer('iscrizione_id').references(() => iscrizione.id).notNull(),
	documento_identita: serial('documento_identita').notNull().unique(), // The serial will be the name of the file
	gruppo_sanguineo: text('gruppo_sanguineo').notNull(),
	allergie: text('allergie').notNull(),
	patologie: text('patologie').notNull()
});

export const admin = pgTable('admin', {
	id: serial('id').primaryKey(),
	username: text('username').unique().notNull(),
	password: text('password').notNull(),
	email: text('email').unique().notNull()
});

