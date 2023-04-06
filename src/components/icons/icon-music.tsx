import { component$ } from "@builder.io/qwik";

export const IconMusic = component$(() => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#music-lg-clip)">
        <rect width="24" height="24" fill="none" />
        <circle cx="5" cy="19" r="4" stroke="black" stroke-width="2" />
        <circle cx="19" cy="19" r="4" stroke="black" stroke-width="2" />
        <path
          d="M7 15V2C7 1.44772 7.44772 1 8 1H20C20.5523 1 21 1.44772 21 2V15"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 7H20"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="music-lg-clip">
          <rect width="24" height="24" fill="none" />
        </clipPath>
      </defs>
    </svg>
  );
});
