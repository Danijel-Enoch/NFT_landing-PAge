<script>
	import imageSrc from '../assets/2616.png';
	import { base, assets } from '$app/paths';
	import team1 from '../assets/2579.png';
	import team6 from '../assets/2604.png';
	import team7 from '../assets/2603.png';
	import team3 from '../assets/2590.png';
	import team4 from '../assets/2620(1).png';
	import team5 from '../assets/2553(1).png';

	let text = 'text-white font-bold animate-bounce  text-2xl';
</script>

<header class="">
	<nav
		class=" lg:fixed  lg:flex  bg-zinc-800 lg:shadow-md md:shadow-md md:gap-12 lg:gap-4 lg:w-full lg:z-20 md:z-20 sm:flex lg:flex-row md:pr-10    "
	>
		<img class="z-21   md:w-0 lg:w-1/3 sm:invisible" src="" alt="" />

		<ul
			class="text-white lg:w-2/3  md:ml-32 md:w-2/3 lg:ml-32 flex sm:flex-col sm:w-full sm:gap-2 lg:flex-row md:flex-row md:gap-9 lg:gap-9 uppercase py-5 items-center xs:text-sm xs:gap-3 xs:flex-col  "
		>
		
			<li class=""><a href="/#about">About</a></li>
			<li class=""><a href="/#roadmap">Road Map</a></li>
			<li class=""><a href="/#traits">Traits and Security</a></li>
			<li class=""><a href="/#team">Team</a></li>
			<li class=""><a href="/#feature">Feature</a></li>
			<li class=""><a href="/#FAQ">(FAQ)</a></li>
			<div class=" shadow-md ">
				<button
					class="rounded shadow-md outline py-4 px-4 text-xs hover:-translate-y-1 hover:scale-110  duration-300"
				>
					Connect Wallet
				</button>
			</div>
		</ul>
	</nav>
</header>

<div class="flex items-center bg-black lg:flex-row md:flex-row sm:flex-col xs:flex-col  ">
	<div class=" lg:w-1/2  bg-black">
		<img class="lg:w-1/2 sm:mt-32 md:-pt-22 " src={imageSrc} alt="" />
	</div>

	<div
	id="about"
		class=" lg:w-1/2 bg-black lg:pt-44 sm:pt-10 lg:text-center md:text-center sm:text-center sm:flex-col md:flex-col xs:flex-col"
	>
		<span
			class="lg:text-6xl text-warning  md:text-2xl sm:text-md font-bold text uppercase md:mt-16 md:pb-10  xs:ml-32 "
			>Who is Luther?</span
		>
		<p
			class="text-white lg:text-2xl font-bold font uppercase md:text-base md:px-7 xs:text-sm xs:ml-6 xs:text-center "
		>
			Luther is a pillar of his community, Luther is the king of his jungle. Luther loves fashion ,
			the concepts of new ideas and the reimagining of old ones, he revels in creating ideas and
			bringing them to life.
		</p>
		<p
			class="text-white lg:text-2xl font-bold font lg:pt-10 uppercase md:text-base md:px-7 xs:text-sm xs:ml-6 xs:text-center "
		>
			As a family man, he is a leader and a teacher . Luther is passionate about his community, he
			has struggled from the ground up and made it out the mud, he is invested in ensuring persons
			in his community get a head start through his trials and tribulation, learnings and failings.
		</p>
	</div>
</div>
<div id="feature" class="flex items-center bg-black lg:flex-1 md:flex-row sm:flex-col xs:flex-col lg:gap-4  ">
	<div
		class="flex md:w-2/3 lg:w-1/2 flex-col lg:gap-10 lg:pt-20 md:pt-10 uppercase md:gap-4 md:pb-5"
	>
		<span
			class="font-bold pt-10 lg:text-4xl text-warning md:text-xl md:pt-0 sm:ml-10 sm:pt-5 xs:text-center "
		>
			LUTHERS LAIR</span
		>
		<p class="md:text-sm xs:pb-10 text-white lg:text-xl sm:pl-10 sm:w-full sm:pb-10 xs:text-sm xs:text-center">
			Luthers Lair is where he gets comfortable and shares life changing information about history
			as well as current topic. Luther is a everyday father intent on finding financial freedom,
			sharing as much knowledge as he can, to help those interested. Luther merely breaks down
			topics that are misunderstood or complexed in the most simple way he knows how to. Luther
			never gives financial advice
		</p>
	</div>
	<img class="  md:w-1/2 lg:w-1/2 lg:pt-0 " src={team7} alt="" />
	
</div>




<!-- component -->

<div id="roadmap" class=" bg-black pt-20 pl-10 xs:-ml-24 ">
	<span
		class=" lg:ml-60 pl-60 upppercase text-white lg:mt-20 pt-10 text-justify sm:pl-20 md:ml-14 font-bold text-3xl xs:-ml-10"
	>
		ROADMAP
	</span>
	<div />
	<div class="py-10 sm:pl-0 mx-auto px-10">
		<!-- component -->
		<div class="relative  w-full mt-15 ml-26 pl-24 ">
			<div class="border-r-4 border-white absolute h-full top-0" style={{ left: '9px' }} />
			<ul class="list-none m-0 p-0 gap-12">
				<li class="mb-5  ">
					<div class="flex group items-center ">
						<div
							class="bg-gray-800 group-hover:bg-red-700 z-10  rounded-full border-4 border-black  h-5 w-5"
						>
							<div class="bg-gray-800 h-1 w-6 items-center  ml-4 mt-1" />
						</div>
						<div class="flex-1 ml-4 z-10 font-medium">
							<div
								class="order-1 space-y-2 bg-gray-800 rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4"
							>
								<span class="mb-3 font-bold text-white text-2xl">
									Q2 2021
								</span>
								<h3 class="mb-3 font-bold text-white text-sm">Luther the Lion avatar creation</h3>
							</div>
						</div>
					</div>
				</li>
				<li class="mb-5  ">
					<div class="flex group items-center ">
						<div
							class="bg-gray-800 group-hover:bg-red-700 z-10 rounded-full border-4 border-black  h-5 w-5"
						>
							<div class="bg-black h-1 w-6 items-center  ml-4 mt-1" />
						</div>
						<div class="flex-1 ml-4 z-10 font-medium">
							<div
								class="order-1 space-y-2 bg-gray-800 rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4"
							>
								<h3 class="mb-3 font-bold text-white text-2xl">Q3 2021</h3>
								<h3 class="mb-3 font-bold text-white text-sm">2D Generative art created</h3>
							</div>
						</div>
					</div>
				</li>
				<li class="mb-5  ">
					<div class="flex group items-center ">
						<div
							class="bg-gray-800 group-hover:bg-red-700 z-10 rounded-full border-4 border-black  h-5 w-5"
						>
							<div class="bg-black h-1 w-6 items-center  ml-4 mt-1" />
						</div>
						<div class="flex-1 ml-4 z-10 font-medium">
							<div
								class="order-1 space-y-2 bg-gray-800 rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4"
							>
							<span>
								<h3 class="mb-3 font-bold text-white text-2xl">
									Q1 2021
								</h3>
								<h3 class="mb-3 font-bold text-white text-sm">
									3D animate education series 
								</h3>
							</div>
						</div>
					</div>
				</li>
				<li class="mb-5  ">
					<div class="flex group items-center ">
						<div
							class="bg-gray-800 group-hover:bg-red-700 z-10 rounded-full border-4 border-black  h-5 w-5"
						>
							<div class="bg-black h-1 w-6 items-center  ml-4 mt-1" />
						</div>
						<div class="flex-1 ml-4 z-10 font-medium">
							<div
								class="order-1 space-y-2 bg-gray-800 rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4"
							>
								<span>
									
								</span>
								<h3 class="mb-3 font-bold text-white text-2xl">
									Q3 2022
								</h3>
								<h3 class="mb-3 font-bold text-white text-sm">
									Luther the Lion 2D project launch
								</h3>
							</div>
						</div>
					</div>
				</li>
				<li class="mb-5  ">
					<div class="flex group items-center ">
						<div
							class="bg-gray-800 group-hover:bg-red-700 z-10 rounded-full border-4 border-black  h-5 w-5"
						>
							<div class="bg-black h-1 w-6 items-center  ml-4 mt-1" />
						</div>
						<div class="flex-1 ml-4 z-10 font-medium">
							<div
								class="order-1 space-y-2 bg-gray-800 rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4"
							>
								<h3 class="mb-3 font-bold text-white text-2xl">Community wallet created</h3>
								<p class="pb-4 text-sm text-gray-100">10% of primary sales <br> 2.5% secondary sales</p>
							</div>
						</div>
					</div>
				</li>
				<li class="mb-5  ">
					<div class="flex group items-center ">
						<div
							class="bg-gray-800 group-hover:bg-red-700 z-10 rounded-full border-4 border-black  h-5 w-5"
						>
							<div class="bg-black h-1 w-6 items-center  ml-4 mt-1" />
						</div>
						<div class="flex-1 ml-4 z-10 font-medium">
							
							<div
								class="order-1 space-y-2 bg-gray-800 rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4"
							>
								<h3 class="mb-3 font-bold text-white text-2xl">	Q2 2023</h3>
								<p class="pb-4 text-sm text-gray-100">3D Generative project conceptualized</p>
								<p class="pb-4 text-sm text-gray-100">3D pieces metaverse ready</p>
								<p class="pb-4 text-sm text-gray-100">AR/VR compatible</p>
								<p class="pb-4 text-sm text-gray-100">2D holders guaranteed mint</p>
							</div>
						</div>
					</div>
				</li>
				<li class="mb-5  ">
					<div class="flex group items-center ">
						<div
							class="bg-gray-800 group-hover:bg-red-700 z-10 rounded-full border-4 border-black  h-5 w-5"
						>
							<div class="bg-black h-1 w-6 items-center  ml-4 mt-1" />
						</div>
						<div class="flex-1 ml-4 z-10 font-medium">
							<div
								class="order-1 space-y-2 bg-gray-800 rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4"
							>
								<h3 class="mb-3 font-bold text-white text-2xl">
									2D project owners guaranteed mint of 3D version Q3 2023
								</h3>
								<p class="pb-4 text-sm text-gray-100">3D versions metaverse compatible</p>
							</div>
						</div>
					</div>
				</li>
				<li class="mb-5  ">
					<div class="flex group items-center ">
						<div
							class="bg-gray-800 group-hover:bg-red-700 z-10 rounded-full border-4 border-black  h-5 w-5"
						>
							<div class="bg-black h-1 w-6 items-center  ml-4 mt-1" />
						</div>
						<div class="flex-1 ml-4 z-10 font-medium">
							<div
								class="order-1 space-y-2 bg-gray-800 rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4"
							>
								<h3 class="mb-3 font-bold text-white text-2xl">Personal Portfolio April Fools</h3>
								<p class="pb-4 text-sm text-gray-100">University of DVI (1997 - 2001)</p>
							</div>
						</div>
					</div>
				</li>

				<li class="mb-5  ">
					<div class="flex group items-center ">
						<div
							class="bg-gray-800 group-hover:bg-red-700 z-10 rounded-full border-4 border-black  h-5 w-5"
						>
							<div class="bg-black h-1 w-6 items-center  ml-4 mt-1" />
						</div>
						<div class="flex-1 ml-4 z-10 font-medium">
							<div
								class="order-1 space-y-2 bg-gray-800 rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4"
							>
								<h3 class="mb-3 font-bold text-white text-2xl">COMMUNITY TO DECIDE - Q1 2024 </h3>
								<p class="pb-4 text-sm text-gray-100">Physical toys concept considered<br />
									- physical toys speak a daily affirmation upon pressing a button<br />
									- physical toys are dressed as doctors, lawyers, sportsmen, creatives, astronauts<br /></p>
							</div>
						</div>
					</div>
				</li>

			</ul>
		</div>
	</div>
	<!-- Road map -->
</div>

<div id="traits" class="flex lg:flex-row lg:mx-10 md:flex-row md:-pt-10 sm:flex-col xs:flex-col ">
	<div class=" lg:w-2/5  bg-zinc-800">
		<img class="" src={team6} alt="testinf " />
	</div>

	<div class=" lg:w-3/5 sm:pb-5 bg-black  text-left lg:pt-32 md:pt-20 space-y-4 ">
		<span class="text-3xl text-warning font-bold text uppercase px-8 xs:text-base xs:ml-12 "
			>Traits and Scarcity</span
		>
		<p class="text-white lg:text-xl px-8  font uppercase md:text-base xs:text-sm xs:pb-6">
			Each Luther Lion NFT has been programmatically generated from 190+ attributes across traits
			ranging from Clothes, Eye Accessories, Head-Gear, and many more. All 2626 are unique and royal
			, some however, have rare traits that have special meaning
		</p>
	</div>
</div>


<div class="gap-12 flex  lg:flex-row md:flex-row xs:flex-col p-8 sm:flex-col bg-gray-800 ">
	<img
		class="md:w-40 md:h-40 lg:h-52 lg:w-52 hover:skew-y-3"
		src={team6}
		alt=""
	/>
	<img
		class="md:w-40 md:h-40 lg:h-52 lg:w-52  lg:visible md:visible hover:skew-y-3 "
		src={team5}
		alt=""
	/>
	<img
		class="md:w-40 md:h-40 lg:h-52 lg:w-52  lg:visible md:visible hover:skew-y-3"
		src={team3}
		alt=""
	/>
	<img
		class="md:w-40 md:h-40 lg:h-52 lg:w-52  lg:visible md:visible hover:skew-y-3"
		src={team1}
		alt=""
	/>
	<img
		class="md:w-40 md:h-40 lg:h-52 lg:w-52  lg:visible md:visible hover:skew-y-3"
		src={team4}
		alt=""
	/>
</div>


<div id="team" class=" bg-black pb-10">
	<div class="flex flex-col">
		<span class="justify-items-center text-white text-6xl pt-10 text-bold text-center"> TEAM </span>
		<div class="flex lg:flex-row md:flex-row xs:flex-col sm:flex-col gap-4 bg-black  pt-10">
			<div class=" lg:w-96 lg:h-96 flex text-white flex-col mx-10 gap-2 mt-5">
				<img class=" rounded-full" src={imageSrc} alt="this is an oka" />
				<span class={text}> Macko Polo </span>
				CTO
			</div>
			<div class="flex lg:w-96 lg:h-96 text-white gap-2 flex-col mx-10 mt-5">
				<img class=" rounded-full" src={team1} alt="this is an okay" />
				<span class={text}> Macko Polo </span>
				CEO
			</div>

			<div class=" lg:w-96 lg:h-96 flex text-white flex-col gap-2 mx-10 mt-5">
				<img class=" rounded-full" src={team6} alt="this is an okay" />
				<span class={text}> Macko Polo </span>
				Product Manger
			</div>
			<div class="flex lg:w-96 lg:h-96 text-white gap-2 flex-col  mx-10 mt-5">
				<img class=" rounded-full" src={team7} alt="this is an Okay" />
				<span class={text}> Macko Polo </span>
				DeVeloper
			</div>
		</div>
	</div>
</div>
<div id="FAQ" class="  bg-black">

			<h1 class="text-6xl font-extrabold text-warning py-10 text-center">
				FAQ
			</h1>
  <div class="flex text-black text-center lg:flex-row md:flex-row sm:flex-col xs:flex-col items-center auto gap-10 lg:px-72 md:px-10 sm:px-10 xs:px-10 py-10">
	  <div class=" bg-slate-100 rounded-xl shadow-lg w-fit">
		  <div tabindex="0" class="collapse border-solid">
			<input type="checkbox"> 
			<div class="collapse-title text-xl  border-solid font-extrabold border-black">
			  Who is Luther?
			</div>
			<div class="collapse-content"> 
			  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
				molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
				numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
				optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
				obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
				nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
				tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
				quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
				sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
				recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
				minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit </p>
			</div>
		  </div>
		  <div tabindex="0" class="collapse">
			<input type="checkbox"> 
			<div class="collapse-title text-xl font-extrabold">
			  Traits and Scarcity
			</div>
			<div class="collapse-content"> 
			  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
				molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
				numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
				optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
				obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
				nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
				tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
				quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
				sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
				recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
				minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit </p>
			</div>
		  </div>
		  <div tabindex="0" class="collapse">
			<input type="checkbox"> 
			<div class="collapse-title text-xl font-extrabold">
			    Who is Luther?
			</div>
			<div class="collapse-content"> 
			  <p>tabindex="0" attribute is necessary to make the div focusable</p>
			</div>
		  </div>
		  <div tabindex="0" class="collapse">
			<input type="checkbox"> 
			<div class="collapse-title text-xl font-extrabold">
				Traits and Scarcity
			</div>
			<div class="collapse-content"> 
			  <p>tabindex="0" attribute is necessary to make the div focusable</p>
			</div>
		  </div>
		  <div tabindex="0" class="collapse">
			<input type="checkbox"> 
			<div class="collapse-title text-xl font-extrabold">
			 Team
			</div>
			<div class="collapse-content"> 
			  <p>tabindex="0" attribute is necessary to make the div focusable</p>
			</div>
		  </div>

	  </div>
	  <div class="w-fit bg-slate-100 text-black rounded-xl shadow-lg  ">
		  <div tabindex="0" class="collapse">
			<input type="checkbox"> 
			<div class="collapse-title text-xl font-extrabold">
			who is Luther?
			</div>
			<div class="collapse-content"> 
			  <p>tabindex="0" attribute is necessary to make the div focusable</p>
			</div>
		  </div>
		  <div tabindex="0" class="collapse">
			<input type="checkbox"> 
			<div class="collapse-title text-xl font-extrabold">
			  RoadMap
			</div>
			<div class="collapse-content"> 
			  <p>tabindex="0" attribute is necessary to make the div focusable</p>
			</div>
		  </div>
		  <div tabindex="0" class="collapse">
			<input type="checkbox"> 
			<div class="collapse-title text-xl font-extrabold">
			 Luther Lair
			</div>
			<div class="collapse-content"> 
			  <p>tabindex="0" attribute is necessary to make the div focusable</p>
			</div>
		  </div>
		  <div tabindex="0" class="collapse">
			<input type="checkbox"> 
			<div class="collapse-title text-xl font-extrabold">
			 Feature
			</div>
			<div class="collapse-content"> 
			  <p>tabindex="0" attribute is necessary to make the div focusable</p>
			</div>
		  </div>
		  <div tabindex="0" class="collapse">
			<input type="checkbox"> 
			<div class="collapse-title text-xl font-extrabold ">
			  Team
			</div>
			<div class="collapse-content"> 
			  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
				molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
				numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
				optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
				obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
				nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
				tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
				quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
				sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
				recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
				minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit</p>
			</div>
		  </div>
	  </div>
  </div>

</div>
<div class="bg-black text-center font-extrabold  text-white font-syne">
	© 2022 Luther | All Rights Reserved
</div>

