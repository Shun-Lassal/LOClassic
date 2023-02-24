<script setup>
import { useCoreStore } from "@/stores/coreStore";
import { onMounted, ref, toRaw } from "vue";

import YouTube from "vue3-youtube";

const player = ref(null);

const coreStore = useCoreStore();

// const onReady = () => {
//   player.playVideo();
// };
</script>

<template>
  <div class="flex flex-col">
    <div class="flex h-20 items-center <lg:(flex-col h-50)">
      <img
        src="https://static.wikia.nocookie.net/lastoasis_gamepedia_en/images/e/e2/LO-worldmap.png"
        class="-z-1 absolute w-full h-full filter blur-md"
      />
      <div class="w-30">
        <img
          src="../../assets/LOclassic_logo_Clear.png"
          class="w-30 h-30 transform translate-y-1"
        />
      </div>
      <div class="flex flex-1 justify-start space-x-10 items-center">
        <router-link
          to="Announcements"
          class="font-okami text-2xl hover:(text-lored) text-white lg:(ml-10) text-shadow-lg"
          >Announcements</router-link
        >
        <router-link
          to=""
          class="font-okami text-2xl hover:(text-lored) text-white text-shadow-lg"
          >Server List</router-link
        >
        <router-link
          to=""
          class="font-okami text-2xl hover:(text-lored) text-white text-shadow-lg"
          >Leaderboards</router-link
        >
        <router-link
          to=""
          class="font-okami text-2xl hover:(text-lored) text-white text-shadow-lg"
          >About Us</router-link
        >
      </div>
      <div class="flex justify-center mr-6">
        <a
          href=""
          class="flex items-center font-okami text-2xl text-white hover:(text-lored)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="48"
            height="48"
            class="fill-white hover:(fill-lored) filter drop-shadow-lg"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M10.076 11c.6 0 1.086.45 1.075 1 0 .55-.474 1-1.075 1C9.486 13 9 12.55 9 12s.475-1 1.076-1zm3.848 0c.601 0 1.076.45 1.076 1s-.475 1-1.076 1c-.59 0-1.075-.45-1.075-1s.474-1 1.075-1zm4.967-9C20.054 2 21 2.966 21 4.163V23l-2.211-1.995-1.245-1.176-1.317-1.25.546 1.943H5.109C3.946 20.522 3 19.556 3 18.359V4.163C3 2.966 3.946 2 5.109 2H18.89zm-3.97 13.713c2.273-.073 3.148-1.596 3.148-1.596 0-3.381-1.482-6.122-1.482-6.122-1.48-1.133-2.89-1.102-2.89-1.102l-.144.168c1.749.546 2.561 1.334 2.561 1.334a8.263 8.263 0 0 0-3.096-1.008 8.527 8.527 0 0 0-2.077.02c-.062 0-.114.011-.175.021-.36.032-1.235.168-2.335.662-.38.178-.607.305-.607.305s.854-.83 2.705-1.376l-.103-.126s-1.409-.031-2.89 1.103c0 0-1.481 2.74-1.481 6.121 0 0 .864 1.522 3.137 1.596 0 0 .38-.472.69-.871-1.307-.4-1.8-1.24-1.8-1.24s.102.074.287.179c.01.01.02.021.041.031.031.022.062.032.093.053.257.147.514.262.75.357.422.168.926.336 1.513.452a7.06 7.06 0 0 0 2.664.01 6.666 6.666 0 0 0 1.491-.451c.36-.137.761-.337 1.183-.62 0 0-.514.861-1.862 1.25.309.399.68.85.68.85z"
            />
          </svg>
        </a>
        <button
          class="font-okami text-xl py-2 px-3 bg-lored border border-white text-white hover:(text-lored-100 text-opacity-50) <lg:(hidden)"
        >
          Login / Register
        </button>
      </div>
    </div>
    <div class="z-3 relative">
      <video
        muted
        autoplay
        loop
        class="w-full h-[500px] object-cover object-center"
      >
        <source src="../../assets/LoClassicClip.mp4" type="video/mp4" />
      </video>
      <div
        class="absolute left-0 right-0 top-0 bottom-0 w-full h-full opacity-40 bg-gradient-to-l from-black via-transparent to-black"
      ></div>
      <div
        class="flex flex-col justify-end absolute left-0 right-0 top-0 bottom-O w-full h-full p-4"
      >
        <div class="mb-10 ml-6">
          <h2 class="font-okami text-3xl text-lored text-shadow-lg">
            Back to Lo Classic
          </h2>
          <h2 class="font-okami text-xl text-white text-shadow-lg">
            Grab your gearsets for S4 Remastered
          </h2>
        </div>
      </div>
    </div>
    <div
      class="grid grid-cols-3 <md:(grid-cols-2 grid-rows-1) <sm:(grid-cols-1) bg-black z-1 h-100"
    >
      <div
        class="h-lg justify-start relative bg-gradient-to-t from-black via-black to-transparent pointer-events-none overflow-hidden"
      >
        <img
          src="../../assets/article1.png"
          class="absolute w-full h-60 top-0 left-0 right-0 bottom-0 -z-1 duration-1000 hover:(transform scale-150) pointer-events-auto"
          alt=""
        />
        <div class="flex flex-col justify-end items-start h-100 p-16">
          <h2 class="text-lored font-okami text-2xl">Modded S4 Server</h2>
          <h2 class="text-white font-okami text-lg">
            Tons of changes for less grind and more gameplay
          </h2>
        </div>
      </div>
      <div
        class="h-lg justify-start relative bg-gradient-to-t from-black via-black to-transparent pointer-events-none overflow-hidden"
      >
        <img
          src="../../assets/article2.png"
          class="absolute w-full h-60 top-0 left-0 right-0 bottom-0 -z-1 duration-1000 hover:(transform scale-150) pointer-events-auto"
          alt=""
        />
        <div class="flex flex-col justify-end items-start h-100 p-16">
          <h2 class="text-lored font-okami text-2xl">Daily Event Maps</h2>
          <h2 class="text-white font-okami text-lg">
            From Ancient Cities, to Hard and Worm Maps
          </h2>
        </div>
      </div>
      <div
        class="h-lg justify-start relative bg-gradient-to-t from-black via-black to-transparent pointer-events-none overflow-hidden"
      >
        <img
          src="../../assets/article3.png"
          class="absolute w-full h-60 top-0 left-0 right-0 bottom-0 -z-1 duration-1000 hover:(transform scale-150) pointer-events-auto"
          alt=""
        />
        <div class="flex flex-col justify-end items-start h-100 p-16">
          <h2 class="text-lored font-okami text-2xl">Customs Maps</h2>
          <h2 class="text-white font-okami text-lg">
            To divert from the wasteland
          </h2>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center bg-black z-1">
      <div class="w-2/3 w-full">
        <h3 class="text-lored font-okami text-center text-3xl mt-8">
          Join Us!
        </h3>
        <h5 class="text-white font-okami text-center text-xl my-4">
          Available servers
        </h5>
        <div
          class="flex <lg:(flex-col space-y-4) justify-around items-center mb-10"
        >
          <div class="border flex flex-col justify-center items-center">
            <img
              src="https://static.wikia.nocookie.net/lastoasis_gamepedia_en/images/6/67/Map_Canyon_icon.png/"
              alt=""
            />
            <span class="text-white hover:(text-lored) font-okami my-2"
              >Europe</span
            >
          </div>
          <div class="border flex flex-col justify-center items-center">
            <img
              src="https://static.wikia.nocookie.net/lastoasis_gamepedia_en/images/5/53/Map_SleepingGiants_icon.png"
              alt=""
            />
            <span class="text-white hover:(text-lored) font-okami my-2"
              >North-America (East & West)</span
            >
          </div>
          <div class="border flex flex-col justify-center items-center">
            <img
              src="https://static.wikia.nocookie.net/lastoasis_gamepedia_en/images/2/25/Map_Volcanyon_icon.png"
              alt=""
            />
            <span class="text-white hover:(text-lored) font-okami my-2"
              >Oceania (Australia)</span
            >
          </div>
        </div>
        <div class="flex flex-col justify-center items-center mb-5">
          <h3 class="text-lored font-okami text-2xl animate-pulse">
            Change your Last Oasis version !
          </h3>
          <h3 class="text-white font-okami text-2xl">
            Steam > Last Oasis > Preferences > Beta > Last Oasis [Classic]
          </h3>
        </div>
      </div>
      <div
        class="flex flex-col justify-center items-center my-10 border-t border-t-gray-600 w-full"
      >
        <h3 class="font-okami text-white text-2xl">FOOTER</h3>
      </div>
    </div>
  </div>
</template>
