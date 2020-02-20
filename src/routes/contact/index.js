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
			</div>
		</div>
	);
};

export default photographs;
