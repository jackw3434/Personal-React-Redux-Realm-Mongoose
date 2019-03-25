import React, { Component } from 'react'
import TableBody from './TableBody'
import TableHeader from './TableHeader'

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;
        return (
            <table border="true" width="100%">
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        )
    }
}

export default Table