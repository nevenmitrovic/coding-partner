import sql from 'better-sqlite3'
import { teamsData } from '@/mocks'

const db = sql('coding_partner.db')

db.exec(`
    CREATE TABLE IF NOT EXISTS coders (
        id TEXT PRIMARY KEY REFERENCES user(id) ON DELETE CASCADE,
        full_name TEXT NOT NULL,
        year TEXT,
        active TEXT,
        whatsApp TEXT,
        interests TEXT,
        skills TEXT
    );

    CREATE TABLE IF NOT EXISTS teams (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        team_name TEXT NOT NULL,
        project TEXT NOT NULL,
        required_skills TEXT NOT NULL,
        project_timeline TEXT NOT NULL,
        description TEXT NOT NULL,
        whatsapp_group_link TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS user (
        id TEXT NOT NULL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        emailVerified INTEGER NOT NULL,
        image TEXT,
        createdAt DATE NOT NULL,
        updatedAt DATE NOT NULL
    );

    CREATE TABLE IF NOT EXISTS session (
        id TEXT NOT NULL PRIMARY KEY,
        expiresAt DATE NOT NULL,
        token TEXT NOT NULL UNIQUE,
        createdAt DATE NOT NULL,
        updatedAt DATE NOT NULL,
        ipAddress TEXT,
        userAgent TEXT,
        userId TEXT NOT NULL REFERENCES user(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS account (
        id TEXT NOT NULL PRIMARY KEY,
        accountId TEXT NOT NULL,
        providerId TEXT NOT NULL,
        userId TEXT NOT NULL REFERENCES user(id) ON DELETE CASCADE,
        accessToken TEXT,
        refreshToken TEXT,
        idToken TEXT,
        accessTokenExpiresAt DATE,
        refreshTokenExpiresAt DATE,
        scope TEXT,
        password TEXT,
        createdAt DATE NOT NULL,
        updatedAt DATE NOT NULL
    );

    CREATE TABLE IF NOT EXISTS verification (
        id TEXT NOT NULL PRIMARY KEY,
        identifier TEXT NOT NULL,
        value TEXT NOT NULL,
        expiresAt DATE NOT NULL,
        createdAt DATE NOT NULL,
        updatedAt DATE NOT NULL
    );
`)

// INITIALIZE CODERS TABLE
// const codersCount = db.prepare('SELECT COUNT(*) as count FROM coders').get() as { count: number }

// if (codersCount.count === 0) {
// 	const stmt = db.prepare(`
//         INSERT INTO coders VALUES (
//             null,
//             @full_name,
//             @year,
//             @active,
//             @whatsApp
//         )
//     `)

// 	for (const coder of coderProfiles) {
// 		stmt.run(coder)
// 	}
// }

// // INITIALIZE SKILLS TABLE
// const skillsCount = db.prepare('SELECT COUNT(*) as count FROM skills').get() as { count: number }

// if (skillsCount.count === 0) {
// 	const skillsStmt = db.prepare(`
//         INSERT INTO skills VALUES (
//             null,
//             @name
//         )
//     `)

// 	for (const skill of skillsData) {
// 		skillsStmt.run(skill)
// 	}
// }

// // INITIALIZE INTERESTS TABLE
// const interestsCount = db.prepare('SELECT COUNT(*) as count FROM interests').get() as {
// 	count: number
// }

// if (interestsCount.count === 0) {
// 	const interestsStmt = db.prepare(`
//       INSERT INTO interests VALUES (
//          null,
//          @name
//       )
//    `)

// 	for (const interest of interestsData) {
// 		interestsStmt.run(interest)
// 	}
// }

// // INITIALIZE CODER SKILLS TABLE
// const coderSkillsCount = db.prepare('SELECT COUNT(*) as count FROM coder_skills').get() as {
// 	count: number
// }

// if (coderSkillsCount.count === 0) {
// 	const coderSkillsStmt = db.prepare(`
//         INSERT INTO coder_skills VALUES (
//             null,
//             @coder_id,
//             @skill_id
//         )
//     `)

// 	for (const coderSkill of coderSkillsData) {
// 		coderSkillsStmt.run(coderSkill)
// 	}
// }

// // INITIALIZE CODER INTERESTS TABLE
// const coderInterestsCount = db.prepare('SELECT COUNT(*) as count FROM coder_interests').get() as {
// 	count: number
// }

// if (coderInterestsCount.count === 0) {
// 	const coderInterestsStmt = db.prepare(`
//         INSERT INTO coder_interests VALUES (
//             null,
//             @coder_id,
//             @interest_id
//         )
//     `)

// 	for (const coderInterest of coderInterestsData) {
// 		coderInterestsStmt.run(coderInterest)
// 	}
// }

// INITIALIZE TEAM TABLE
// const teamsCount = db.prepare('SELECT COUNT(*) as count from teams').get() as { count: number }

// if (teamsCount.count === 0) {
// 	const teamsStmt = db.prepare(`
//         INSERT INTO teams VALUES (
//             null,
//             @team_name,
//             @project,
//             @required_skills,
//             @project_timeline,
//             @description,
//             @whatsapp_group_link
//         )
//     `)

// 	for (const team of teamsData) {
// 		teamsStmt.run(team)
// 	}
// }

export { db }
