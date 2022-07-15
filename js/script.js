// # Oggi cominciamo a costruire la nostra fantastica (e soprattutto innovativa) app di messaggistica!

// ! La consegna finale per questo esercizio è Lunedì 18!

// Procediamo per milestone fino a replicare tutto quello che abbiamo visto in classe.
// Per quanto riguarda la giornata di oggi, ci aspettiamo il completamento della Milestone 1!
// Vi ricordo che i ticket devono essere inerenti alla milestone del giorno e se volete andare avanti
// dovete cavarvela da soli.
// Di seguito riportate tutte le milestone obbligatorie, domani parleremo della milestone opzionale
// (bonus):

// $ Milestone 1 (DAY 1)
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
// dall’interlocutore(bianco) assegnando due classi CSS diverse. Visualizzazione dinamica della lista
// contatti: tramite la direttiva v -for, visualizzare nome e immagine di ogni contatto.

// $ Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi
// relativi al contatto attivo all’interno del pannello della conversazione. Click sul contatto mostra
// la conversazione del contatto cliccato.

// $ Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo
// viene aggiunto al thread sopra, come messaggio verde. Risposta dall’interlocutore: ad ogni inserimento
// di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

// $ Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il
// cui nome contiene le lettere inserite(es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco
// e Martina).

// Trovate in allegato gli screenshot dell'app e una base di partenza coi dati utili per la milestone
// di oggi.

// @ Consigli Utili:
// non dimentichiamo di fare analisi sia per la struttura dati che per la grafica
// procediamo a blocchettoni per evitare di avere poi problemi col CSS in fase avanzata
// Cerchiamo di rispettare tutti i principi e le best practices viste finora (nomi di variabili e classi,
// centralizzazione ecc)

// Buon lavoro e soprattutto buon divertimento!!

// # -----------
// # Svolgimento
// # -----------

const boolzapp = new Vue({
  name: "Boolzapp",
  el: "#root",

  // # Dati
  data: {
    // Value dell'input di ricerca
    searchValue: "",

    // L'index che governa il mondo
    currentActiveIndex: 0,

    // Value dell'input nell'area messaggistica
    newMessage: "",

    user: {
      name: "Pasquale",
      avatar: "_io",
    },
    contacts: [
      {
        name: "Michele",
        avatar: "_1",
        contactMessageList: [
          {
            text: "ciao",
            whoIs: 1,
          },
          {
            text: "ciao",
            whoIs: 0,
          },
          {
            text: "ciao",
            whoIs: 1,
          },
          {
            text: "ciao",
            whoIs: 0,
          },
          {
            text: "ciao",
            whoIs: 1,
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2",
        contactMessageList: [
          {
            text: "ciao",
            whoIs: 1,
          },
          {
            text: "ciao",
            whoIs: 0,
          },
          {
            text: "ciao",
            whoIs: 1,
          },
          {
            text: "ciao",
            whoIs: 0,
          },
          {
            text: "ciao",
            whoIs: 1,
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "_3",
        contactMessageList: [
          {
            text: "ciao",
            whoIs: 1,
          },
          {
            text: "ciao",
            whoIs: 0,
          },
          {
            text: "ciao",
            whoIs: 1,
          },
          {
            text: "ciao",
            whoIs: 0,
          },
          {
            text: "ciao",
            whoIs: 1,
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "_4",
        contactMessageList: [
          {
            text: "ciao",
            whoIs: 1,
          },
          {
            text: "ciao",
            whoIs: 0,
          },
          {
            text: "ciao",
            whoIs: 1,
          },
          {
            text: "ciao",
            whoIs: 0,
          },
          {
            text: "ciao",
            whoIs: 1,
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "_5",
        contactMessageList: [
          {
            text: "ciao",
            whoIs: 1,
          },
          {
            text: "ciao",
            whoIs: 0,
          },
          {
            text: "ciao",
            whoIs: 1,
          },
          {
            text: "ciao",
            whoIs: 0,
          },
          {
            text: "ciao",
            whoIs: 1,
          },
        ],
      },
      {
        name: "Orazio",
        avatar: "_6",
        contactMessageList: [
          {
            text: "ciao",
            whoIs: 1,
          },
          {
            text: "ciao",
            whoIs: 0,
          },
          {
            text: "ciao",
            whoIs: 1,
          },
          {
            text: "ciao",
            whoIs: 0,
          },
          {
            text: "ciao",
            whoIs: 1,
          },
        ],
      },
      {
        name: "Orlando",
        avatar: "_7",
        contactMessageList: [
          {
            text: "ciao",
            whoIs: 1,
          },
          {
            text: "ciao",
            whoIs: 0,
          },
          {
            text: "ciao",
            whoIs: 1,
          },
          {
            text: "ciao",
            whoIs: 0,
          },
          {
            text: "ciao",
            whoIs: 1,
          },
        ],
      },
      {
        name: "Giuseppe",
        avatar: "_8",
        contactMessageList: [
          {
            text: "ciao",
            whoIs: 1,
          },
          {
            text: "ciao",
            whoIs: 0,
          },
          {
            text: "ciao",
            whoIs: 1,
          },
          {
            text: "ciao",
            whoIs: 0,
          },
          {
            text: "ciao",
            whoIs: 1,
          },
        ],
      },
      {
        name: "Pinocchio",
        avatar: "_1",
        contactMessageList: [
          {
            text: "ciao",
            whoIs: 1,
          },
          {
            text: "ciao",
            whoIs: 0,
          },
          {
            text: "ciao",
            whoIs: 1,
          },
          {
            text: "ciao",
            whoIs: 0,
          },
          {
            text: "ciao",
            whoIs: 1,
          },
        ],
      },
      {
        name: "Eren",
        avatar: "_2",
        contactMessageList: [
          {
            text: "ciao",
            whoIs: 1,
          },
          {
            text: "cavallo pazzo rabiot",
            whoIs: 0,
          },
          {
            text: "cavallo pazzo rabiot",
            whoIs: 0,
          },
          {
            text: "cavallo pazzo rabiot",
            whoIs: 0,
          },
          {
            text: "cavallo pazzo rabiot",
            whoIs: 0,
          },
          {
            text: "cavallo pazzo rabiot",
            whoIs: 0,
          },
          {
            text: "cavallo pazzo rabiot",
            whoIs: 0,
          },
          {
            text: "cavallo pazzo rabiot",
            whoIs: 0,
          },
          {
            text: "cavallo pazzo rabiot",
            whoIs: 0,
          },
          {
            text: "cavallo pazzo rabiot",
            whoIs: 0,
          },
          {
            text: "ciao",
            whoIs: 1,
          },
          {
            text: "ciao",
            whoIs: 0,
          },
          {
            text: "ciao",
            whoIs: 1,
          },
        ],
      },
      {
        name: "Mikasa",
        avatar: "_3",
        contactMessageList: [
          {
            text: "ciao",
            whoIs: 1,
          },
          {
            text: "cavallo",
            whoIs: 0,
          },
          {
            text: "ciao",
            whoIs: 1,
          },
          {
            text: "ciao",
            whoIs: 0,
          },
          {
            text: "ciao",
            whoIs: 1,
          },
        ],
      },
    ],
  },

  // # Metodi
  methods: {
    // $ Al click della chat nell'area contatti cambia la chat visualizzata
    changeChat(index) {
      this.currentActiveIndex = index;
    },

    // $ Al click oppure al keyup di invio verrà inviato un nuovo messaggio
    sendNewMessage() {
      const message = {
        text: this.newMessage,
        whoIs: 1,
      };

      const index = this.currentActiveIndex;
      const currentChat = this.contacts[index].contactMessageList;
      currentChat.push(message);

      this.newMessage = "";
    },

    // $ Usiamo una funzione per calcolare src delle foto delle persone
    buildSrc(avatar) {
      return `img/avatar${avatar}.jpg`;
    },
  },

  // # Dati ottenuti in funzione dei data
  computed: {
    // $ Visualizziamo tutti messaggi della chat correntemente visualizzata
    rendAllMessage() {
      const index = this.currentActiveIndex;
      const currentChat = this.contacts[index].contactMessageList;
      const lastMessage = currentChat[currentChat.length - 1].whoIs;

      // Controlliamo se l'ultimo messaggio l'ha mandato l'utente:
      // se così fosse allora verrà inviata una risposta dal contatto
      if (lastMessage) {
        let contactsTimingResponse = setTimeout(() => {
          const contactMess = {
            text: "ok",
            whoIs: 0,
          };
          currentChat.push(contactMess);
        }, 1000);
      }

      // Reinderizziamo la chat tra il contatto attivo e l'utente
      const rendAllMessage = currentChat.map((message, i) => {
        return message;
      });

      return rendAllMessage;
    },

    // $ Filtriamo i contatti dei vari nella lista dei contatti
    // $ in funzione del value del search input
    filterContacts() {
      let filterContacts = [];
      if (this.searchValue === "") {
        filterContacts = this.contacts.map((contact) => {
          return contact;
        });
      } else {
        filterContacts = this.contacts.filter((contact) => {
          return contact.name.includes(this.searchValue);
        });
      }
      return filterContacts;
    },
  },
});

// # DAYJS

dayjs.extend(dayjs_plugin_customParseFormat);
dayjs.locale("it");

const date = dayjs("2021-12-11 15:10:00").format("DD/MM/YYYY HH:mm:ss");
console.log(date);

dayjs.extend(dayjs_plugin_relativeTime);

const oldDate = dayjs("1996-11-04").fromNow();
console.log(oldDate);
