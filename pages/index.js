// export default function Index() {
// 	return <h1>FLareact dgs!</h1>;
// }

import Link from 'flareact/link';
// import Image from 'next/image';
// import Navbar from '../compo/Navbar';
import Head from 'flareact/head';
import { useState } from 'react';
// import hazel from '/hazel.jpg';
// import tubby from '../public/tubby.jpg';
// import whiskey from '../public/whiskey.jpg';

const data = [
	{
		name: 'Whiskey',
		age: 5,
		// src: whiskey,
		facts: [
			'Whiskey loves eating popcorn.',
			'Whiskey is a terrible guard dog.',
			'Whiskey wants to cuddle with you!',
		],
	},
	{
		name: 'Hazel',
		age: 3,
		// src: hazel,
		facts: [
			'Hazel has soooo much energy!',
			'Hazel is highly intelligent.',
			'Hazel loves people more than dogs.',
		],
	},
	{
		name: 'Tubby',
		age: 2,
		// src: tubby,
		facts: [
			'Tubby is not the brightest dog',
			'Tubby does not like walks or exercise.',
			'Tubby loves eating food.',
		],
	},
];

export async function getEdgeProps() {
	const dogs = data;
	// console.log(dogs);
	return {
		props: { dogs },
	};
}

function DogList({ dogs }) {
	// const [dogs, setDogs] = useState(props.data);

	// console.log('dt', dogs);
	// if (!dogs) return '...loading';
	return (
		<>
			<Head>
				<title>Dogs shelter</title>
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta
					name='keywords'
					content='dogs, dogs shelter, smart dogs, cute dogs'
				/>
				<meta name='description' content='Find the right dog for you' />
			</Head>
			{/* <Navbar dogs={dogs} /> */}
			<div className='container'>
				<div className='DogList'>
					<h1 className='display-1 text-center mt-3 mb-5 ' id='txt'>
						Dog List!
					</h1>
					<div className='row justify-content-around'>
						{data.map((d) => (
							<div className='Dog col-lg-3 col-sm-3 text-center' key={d.name}>
								{/* <img
									className='image'
									alt={d.name}
									src='http://localhost:8080/haz.jpg'
								/> */}
								{/* <Image
									className='image'
									src={d.src}
									alt={d.name}
									width='260px'
									height='260px'
									// sizes='(min-width:568px) 33vw
									layout='responsive'

									// eager='true'
								/> */}
								<h3 className='mt-3'>
									<Link href='/[slug]' as={`/${d.name}`}>
										<a className='underline'>{d.name}</a>
									</Link>
								</h3>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default DogList;
