import React from "react";
import { Card } from "flowbite-react";

interface Props {
  name: string;
  image: string;
  prix: number;
  id: number;
  onClick: () => void;
}

const Component: React.FC<Props> = ({ name, image, prix, id, onClick }) => {
  return (
    <Card className="max-w-xs ">
      <div className="p-4 flex flex-col items-center">
        <img
          src={`src/assets/images/${image}`}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <h5 className="text-m font-semibold tracking-tight black dark:text-white my-4">
          {name}
        </h5>
        <div className="flex items-center justify-between w-full">
          <span className="text-xl black dark:white">${prix}</span>
          <button
            onClick={onClick}
            className="rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18ZM16.5 18C17.3284 18 18 18.6716 18 19.5C18 20.3284 17.3284 21 16.5 21C15.6716 21 15 20.3284 15 19.5C15 18.6716 15.6716 18 16.5 18ZM11 9H8M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H13M19 15.5H17M5 6H8M5.5 13H16.0218C16.9812 13 17.4609 13 17.8366 12.7523C18.2123 12.5045 18.4013 12.0636 18.7792 11.1818L19.2078 10.1818C20.0173 8.29294 20.4221 7.34853 19.9775 6.67426C19.5328 6 18.5054 6 16.4504 6H12"
              />
            </svg>
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Component;
