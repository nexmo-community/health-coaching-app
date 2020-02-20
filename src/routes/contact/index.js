import { h } from 'preact';
import style from './style';

const photographs = (props) => {
	return (
		<div class={style.pageContact}>
			<h1 class={style.pageTitle}>Hello.</h1>
			<div class={style.formWrapper}>
				<p class={style.pageBody}>
					<div>Let's connect.</div>
					<div>&nbsp;</div>
				</p>
				<div id="otEmbedContainer" style="width:800px; height:640px"></div>
				<script src="https://tokbox.com/embed/embed/ot-embed.js?embedId=7e090103-ae17-4dc7-b610-ada90089c782&room=DEFAULT_ROOM"></script>

				<form name="contact" method="POST" data-netlify="true" action="/contact/success" data-netlify-honeypot="bot-field">
					<input type="hidden" name="form-name" value="contact" />
					<p>
						<input type="text" name="name" placeholder="Name" required />
					</p>
					<p>
						<input type="email" name="email" placeholder="E-Mail" required />
					</p>
					<p>
						<textarea name="message" placeholder="Message" />
					</p>
					<p>
						<button type="submit">Send</button>
					</p>
				</form>
			</div>
		</div>
	);
};

export default photographs;
