'use client'

import Button from '../../common/button'
import styles from './browse-section.module.css'

export default function BrowseSection() {
	const handleStartMatching = () => {
		console.log('start matching...')
	}
	const handleBrowseCoders = () => {
		console.log('redirecting...')
	}

	return (
		<section id='section' className={styles.browseSection}>
			<h4>Connect with developers who share your passion for coding.</h4>
			<p>Match based on skills, interests, and hackathon goals.</p>
			<div className={styles.browseSectionControllers}>
				<Button text={`> start_matching`} type='button' onClick={handleStartMatching} />
				<Button text={`> browse_coders`} type='button' onClick={handleBrowseCoders} />
			</div>
		</section>
	)
}
