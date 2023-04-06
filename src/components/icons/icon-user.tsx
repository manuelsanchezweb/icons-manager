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
