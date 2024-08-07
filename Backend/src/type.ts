import { t } from "elysia";

export const iscriviBody = t.Object({
	evento: t.String(),
	token: t.String(),
	nome_bimbo: t.String(),
	cognome_bimbo: t.String(),
	data_nascita_bimbo: t.Date(),
	residenza_bimbo: t.String(),
	luogo_nascita_bimbo: t.String(),
	codice_fiscale_bimbo: t.String(),
	iscritto_noi_bimbo: t.BooleanString(),
	allergie_bimbo: t.String(),
	patologie_bimbo: t.String(),
	genitori: t.Array(
		t.ObjectString({
			nome_genitore: t.String(),
			cognome_genitore: t.String(),
		}),
	),

	contatti: t.Array(
		t.ObjectString({
			nome_contatto: t.String(),
			cognome_contatto: t.String(),
			telefono_contatto: t.String(),
			ruolo_contatto: t.String(),
		}),
	),
	carta_identita_bimbo: t.File(),
	bonifico_pagamento: t.Optional(t.File()),
	privacy_foto: t.BooleanString(),
	privacy_policy: t.BooleanString(),
	note: t.String(),
});

export const updateBody = t.Object({
	token: t.String(),
	id: t.Number(),
	nome_bimbo: t.String(),
	cognome_bimbo: t.String(),
	data_nascita_bimbo: t.Date(),
	residenza_bimbo: t.String(),
	luogo_nascita_bimbo: t.String(),
	codice_fiscale_bimbo: t.String(),
	iscritto_noi_bimbo: t.BooleanString(),
	allergie_bimbo: t.String(),
	patologie_bimbo: t.String(),
	genitori: t.Array(
		t.ObjectString({
			nome_genitore: t.String(),
			cognome_genitore: t.String(),
		}),
	),
	contatti: t.Array(
		t.ObjectString({
			nome_contatto: t.String(),
			cognome_contatto: t.String(),
			telefono_contatto: t.String(),
			ruolo_contatto: t.String(),
		}),
	),
	carta_identita_bimbo: t.Optional(t.File()),
	bonifico_pagamento: t.Optional(t.File()),
	privacy_foto: t.BooleanString(),
	privacy_policy: t.BooleanString(),
	note: t.String(),
	pagamento: t.BooleanString()
});

export const iniziaIscrizioneBody = t.Object({
	email: t.String(),
	evento: t.String(),
});

export const loginBody = t.Object({
	username_mail: t.String(),
	password: t.String(),
});

export const loginStatus = t.Object({
	token: t.String(),
});

export const updateEventoBody = t.Object({
	token: t.String(),
	nome: t.String(),
	descrizione: t.String(),
	data_inizio: t.Date(),
	data_fine: t.Date(),
	luogo: t.String(),
	privacy_policy: t.String(),
	privacy_foto: t.String(),
	organizzatori: t.String(),
	privacy_foto_necessaria: t.BooleanString(),
})