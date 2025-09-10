import sql from 'better-sqlite3'
import {
	coderProfiles,
	skillsData,
	interestsData,
	coderSkillsData,
	coderInterestsData,
} from '@/mocks'

const db = sql('cp.db')

db.prepare(
	`CREATE TABLE IF NOT EXISTS coders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        full_name TEXT NOT NULL,
        year TEXT NOT NULL,
        active TEXT NOT NULL,
        whatsApp TEXT
    )`
).run()

db.prepare(
	`CREATE TABLE IF NOT EXISTS skills (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE
    )`
).run()

db.prepare(
	`CREATE TABLE IF NOT EXISTS interests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE
    )`
).run()

db.prepare(
	`CREATE TABLE IF NOT EXISTS coder_skills (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        coder_id INTEGER NOT NULL,
        skill_id INTEGER NOT NULL,
        FOREIGN KEY (coder_id) REFERENCES coders(id) ON DELETE CASCADE,
        FOREIGN KEY (skill_id) REFERENCES skills(id) ON DELETE CASCADE,
        UNIQUE(coder_id, skill_id)
    )`
).run()

db.prepare(
	`CREATE TABLE IF NOT EXISTS coder_interests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        coder_id INTEGER NOT NULL,
        interest_id INTEGER NOT NULL,
        FOREIGN KEY (coder_id) REFERENCES coders(id) ON DELETE CASCADE,
        FOREIGN KEY (interest_id) REFERENCES interests(id) ON DELETE CASCADE,
        UNIQUE(coder_id, interest_id)
    )`
).run()

// INITIALIZE CODERS TABLE
const codersCount = db.prepare('SELECT COUNT(*) as count FROM coders').get() as { count: number }

if (codersCount.count === 0) {
	const stmt = db.prepare(`
        INSERT INTO coders VALUES (
            null,
            @full_name,
            @year,
            @active,
            @whatsApp
        )
    `)

	for (const coder of coderProfiles) {
		stmt.run(coder)
	}
}

// INITIALIZE SKILLS TABLE
const skillsCount = db.prepare('SELECT COUNT(*) as count FROM skills').get() as { count: number }

if (skillsCount.count === 0) {
	const skillsStmt = db.prepare(`
        INSERT INTO skills VALUES (
            null,
            @name
        )
    `)

	for (const skill of skillsData) {
		skillsStmt.run(skill)
	}
}

// INITIALIZE INTERESTS TABLE
const interestsCount = db.prepare('SELECT COUNT(*) as count FROM interests').get() as {
	count: number
}

if (interestsCount.count === 0) {
	const interestsStmt = db.prepare(`
      INSERT INTO interests VALUES (
         null,
         @name
      )
   `)

	for (const interest of interestsData) {
		interestsStmt.run(interest)
	}
}

// INITIALIZE CODER SKILLS TABLE
const coderSkillsCount = db.prepare('SELECT COUNT(*) as count FROM coder_skills').get() as {
	count: number
}

if (coderSkillsCount.count === 0) {
	const coderSkillsStmt = db.prepare(`
        INSERT INTO coder_skills VALUES (
            null,
            @coder_id,
            @skill_id
        )
    `)

	for (const coderSkill of coderSkillsData) {
		coderSkillsStmt.run(coderSkill)
	}
}

// INITIALIZE CODER INTERESTS TABLE
const coderInterestsCount = db.prepare('SELECT COUNT(*) as count FROM coder_interests').get() as {
	count: number
}

if (coderInterestsCount.count === 0) {
	const coderInterestsStmt = db.prepare(`
        INSERT INTO coder_interests VALUES (
            null,
            @coder_id,
            @interest_id
        )
    `)

	for (const coderInterest of coderInterestsData) {
		coderInterestsStmt.run(coderInterest)
	}
}

export { db, codersCount }
