import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<Link href="/"><h1>My Health Journal</h1></Link>
		<nav>
			<Link activeClassName={style.active} href="/blogs">Blogs</Link>
			<Link activeClassName={style.active} href="/contact">Let's Chat!</Link>
		</nav>
	</header>
);

export default Header;
