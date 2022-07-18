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

// $ Milestone 5 - BONUS
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio
// selezionato.
// Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti

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

    // Tale valore serve a determinare il display
    // delle notifiche
    isHereNotifications: true,

    // Proprietà che gestisce il toggle delle emoji
    isEmojiClicked: false,

    // Proprietà che controlla se il contatto sta scrivendo
    isWritingContact: false,

    // Variabile che gestisce il botton per droppare
    // la section per l'input del nuovo contatto
    dropInputNewContact: false,

    // Value dell'input per l'inserimento del nuovo contatto
    newContact: "",

    // Lista di emoji
    emojis: [
      "&#128540;",
      "&#128513;",
      "&#128514;",
      "&#128515;",
      "&#128516;",
      "&#128523;",
      "&#128527;",
      "&#128528;",
      "&#128529;",
      "&#128534;",
      "&#128535;",
      "&#128538;",
      "&#128539;",
      "&#128546;",
      "&#128517;",
      "&#128518;",
      "&#128519;",
      "&#128521;",
      "&#128522;",
      "&#128524;",
      "&#128525;",
      "&#128526;",
      "&#128530;",
      "&#128531;",
      "&#128532;",
      "&#128533;",
      "&#128536;",
      "&#128537;",
    ],

    user: {
      name: "Pasquale",
      avatar: "_io",
    },
    contacts: [
      {
        name: "Michele",
        avatar: "_1",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "received",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "_3",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "_4",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
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
      if (this.newMessage !== "") {
        const userMessage = {
          text: this.newMessage,
          status: "sent",
          date: "10/01/2020 15:30:55",
        };

        const contactMessage = {
          text: "ok",
          status: "received",
          date: "10/01/2020 15:30:55",
        };

        const index = this.currentActiveIndex;
        const currentChat = this.contacts[index].messages;
        currentChat.push(userMessage);

        this.isWritingContact = true;

        setTimeout(() => {
          currentChat.push(contactMessage);
          this.isWritingContact = false;
        }, 1000);

        this.newMessage = "";
      }
    },

    // $ Usiamo una funzione per calcolare src delle foto delle persone
    buildSrc(avatar) {
      return `img/avatar${avatar}.jpg`;
    },

    // $ Funzione che elimina il messaggio tramite il suo dropdown menu
    cancelThisMessage(i) {
      const index = this.currentActiveIndex;
      const chat = this.contacts[index].messages;
      chat.splice(i, 1);
    },

    // $ Funzione che ,al click del button nella sezione
    // $ delle notifiche, rimuove quest'ultima
    removeNotificationRequest() {
      this.isHereNotifications = false;
    },

    // $ Funzione che gestisce il toggle dell'emoji area
    showEmojiArea() {
      this.isEmojiClicked = !this.isEmojiClicked;
    },

    // $ Aggiungiamo l'emoji al resto del messaggio
    addEmojionMessageInput(index) {
      let emoticon = this.emojis[index];
      let newEmoticon = emoticon.substring(0, emoticon.length);
      this.newMessage = this.newMessage + newEmoticon;
    },

    // $ Droppiamo il menu per inserire l'utente
    createNewContact() {
      this.dropInputNewContact = true;
    },

    // $ Aggiungiamo un nuovo contatto
    addNewContact() {
      if (this.newContact === "") return;
      else {
        const contatto = {
          name: this.newContact,
          avatar: "_2",
          visible: true,
          messages: [],
        };

        this.contacts.push(contatto);

        this.newContact = "";
        this.dropInputNewContact = false;
      }
    },
  },

  // # Dati ottenuti in funzione dei data
  computed: {
    // $ Filtriamo i contatti dei vari nella lista dei contatti
    // $ in funzione del value del search input
    filteredContacts() {
      let filteredContacts = [];
      if (this.searchValue === "") {
        filteredContacts = this.contacts.map((contact) => {
          return contact;
        });
      } else {
        filteredContacts = this.contacts.filter((contact) => {
          const search = this.searchValue.toLowerCase();
          const contatto = contact.name.toLowerCase();
          return contatto.includes(search);
        });
      }
      return filteredContacts;
    },

    // $ Eliminare le doppie apici delle emoji
    clearedEmojis() {
      let clearedEmojis = this.emojis.map((emoji, index) => {
        let newEmoji = emoji.substring(0, emoji.length);
        return newEmoji;
      });

      return clearedEmojis;
    },
  },
});
