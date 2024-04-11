import sqlite3 from 'sqlite3';
import { openDb } from './load.mjs'

export async function createTask(payload) {
    const db = await openDb()
    console.log(`Creating task.... ${payload.title}`)
    db.run("INSERT INTO tasks (id, title, completed_at) VALUES (?, ?, ?)", [payload.id, payload.title, payload.completed_at]);   
    db.close();
}