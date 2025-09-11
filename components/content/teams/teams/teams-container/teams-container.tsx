import TeamCard from './team-card/team-card'
import styles from './teams-container.module.css'

export default function TeamsContainer() {
	return (
		<div className={styles.teamsContainer}>
			<TeamCard
				teamName='CodeCrusaders'
				project='Serbia Hackathon 2024'
				requiredSkills={['React', 'Node.js', 'MongoDB', 'UI/UX']}
				projectTimeline='48 hours'
				description="Building an innovative platform for connecting developers and fostering collaboration. We're looking for passionate developers who want to create something amazing together!"
				whatsappGroupLink='https://chat.whatsapp.com/example123'
			/>
			<TeamCard
				teamName='DevNinjas'
				project='AI Startup Challenge'
				requiredSkills={['Python', 'Machine Learning', 'FastAPI', 'Docker']}
				projectTimeline='2 weeks'
				description="Developing an AI-powered solution for automated code review and bug detection. Join us if you're passionate about AI and want to revolutionize software development!"
			/>
			<TeamCard
				teamName='PixelPioneers'
				project='Mobile App Contest'
				requiredSkills={['React Native', 'Firebase', 'Figma', 'TypeScript']}
				projectTimeline='1 month'
				description='Creating a mobile app that helps students find study groups and collaborate on projects. Perfect opportunity for mobile developers and designers to showcase their skills.'
				whatsappGroupLink='https://chat.whatsapp.com/example456'
			/>
		</div>
	)
}
