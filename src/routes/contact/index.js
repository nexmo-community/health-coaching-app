import { h } from 'preact';
import style from './style';
import Video from '../../components/video/video.js';

const photographs = (props) => {
	return (
		<div class={style.pageContact}>
			<h1 class={style.pageTitle}>Hello.</h1>
			<div class={style.formWrapper}>
				<Video />
			</div>
		</div>
	);
};

export default photographs;

