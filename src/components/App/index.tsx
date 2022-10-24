import React from 'react'
import Counter from '../Counter';
import Modal from '../Modal';
import style from './App.module.scss'


const App: React.FC = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <div className={style.App}>
            <button onClick={() => setOpen(true)} className={style.openModalBtn}>✨ Open counter</button>
            <Modal open={open} setOpen={setOpen}>
                <Counter/>
            </Modal>
        </div>
    );
}

export default App;
