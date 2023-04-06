import { component$ } from "@builder.io/qwik";

// Esto sería el componente en React
// export default function IconFile() {

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
