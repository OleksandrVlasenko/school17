import { useState } from "react";

const Statut = () => {
	const [link, setLink] = useState("");


	
	return (
		<section>
			<h2>Статут школи</h2>
			<a
				href="https://drive.google.com/file/d/15XmyDkj748qTsqR3DesIlAsPWP49He_A/view?usp=drive_link"
				target="blank"
				rel="noopener noreferrer nofollow"
			>
				Завантажити файл
			</a>

			<form ><input type="text" /><button type="submit">Додати посилання</button></form>
		</section>
	);
};

export default Statut;
