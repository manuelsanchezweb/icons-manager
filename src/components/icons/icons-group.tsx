/// Possibility: Have all the icons in the same file

import { component$ } from "@builder.io/qwik";

export const IconUser = component$(() => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#user-lg-clip)">
        <rect width="24" height="24" fill="none" />
        <circle cx="12" cy="5.8" r="4.8" stroke="black" stroke-width="2" />
        <path
          d="M4 23.4V20.2C4 17.549 6.14903 15.4 8.8 15.4H15.2C17.851 15.4 20 17.549 20 20.2V23.4"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <clipPath id="user-lg-clip">
          <rect width="24" height="24" fill="none" />
        </clipPath>
      </defs>
    </svg>
  );
});

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

export const IconFile = component$(() => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 19.52V4.48C4 3.11033 5.11033 2 6.48 2H14.4458C15.0623 2 15.6568 2.22965 16.1132 2.64417L19.1874 5.43629C19.7049 5.90633 20 6.57299 20 7.27212V19.52C20 20.8897 18.8897 22 17.52 22H6.48C5.11033 22 4 20.8897 4 19.52Z"
        stroke="#161616"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 2V6.76C14 7.44483 14.5552 8 15.24 8H20"
        stroke="#161616"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});
