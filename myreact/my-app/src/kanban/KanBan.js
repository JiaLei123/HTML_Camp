import React, { Component } from 'react';
import KanbanBoard from './KanbanBoard';
// import KanbanBoard from './kan/KanbanBoard';

let cardsList = [
    {
        id:1,
        title: "Read the Book",
        description: "I should read the book",
        status: "in process",
        tasks : []
    },
    {
        id:2,
        title: "write some code",
        description: "I should write some code",
        status: "todo",
        tasks : [
            {
                id:1,
                name:"ContactList Example",
                done:true
            },
            {
                id:2,
                name:"Kanban Example",
                done:false
            }
        ]
    }
];

class KanBan extends Component{
    render() {
      return (
            <div>
                <h2>Kanban</h2>
                <KanbanBoard cards={cardsList}/>
            </div>
      );
    }
}

export default KanBan