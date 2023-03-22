class Note {
    title: string;
    content: string;
    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }
    addNote(title: string, content: string) {
        this.title = title;
        this.content = content;
    }
}
class NoteList {
    notes: Note[];
    constructor() {
        this.notes = [];
    }
    addNoteToList(note: Note) {
        this.notes.push(note);
    }
}

const todo1 = new Note("", "");
const todo2 = new Note("", "");
const noteList = new NoteList();

todo1.addNote("buoi sang", "di hoc");
noteList.addNoteToList(todo1);

todo1.addNote("buoi chieu", "ve nha");
noteList.addNoteToList(todo2);

console.log(noteList);