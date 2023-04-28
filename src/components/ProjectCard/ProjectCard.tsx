import { cssModulesClasses } from "@/utils/styles";
import Image from "next/image";
import uniqid from "uniqid";
import type { Project } from "@prisma/client";
import styles from "./ProjectCard.module.scss";

type ProjectCardPropTypes = Project;

const ProjectCard = ({ id, name, description }: ProjectCardPropTypes) => {
  const clss = cssModulesClasses(styles);
  const classes = {
    root: clss("prefix-project-card"),
  };

  return (
    <div className={classes.root}>
      <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <Image
          src={`https://source.unsplash.com/featured/300x201?sig=${uniqid()}`}
          className="pointer-events-none object-cover group-hover:opacity-75"
          alt={name}
          fill
        />
        <button type="button" className="absolute inset-0 focus:outline-none">
          <span className="sr-only">View details for {name}</span>
        </button>
      </div>
      <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
        {name}
      </p>
      <p className="pointer-events-none block text-sm font-medium text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default ProjectCard;
