import type { User, Project, ProjectsOnUsers } from "@prisma/client";
import uniqid from "uniqid";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { ProjectCard } from "../ProjectCard";
import { fromISOToReadableDate } from "@/utils/date";

type UserPropTypes = {
  id: User["id"];
  firstname: User["firstname"];
  role?: User["role"];
};
type UserCardPropTypes = {
  user: UserPropTypes & {
    projects: Array<{ name: string; joinAt: string | null }>;
  };
};

const USER_CARD_RANDOM_IMAGE_URL = `https://source.unsplash.com/featured/300x201?sig=${uniqid()}`;

const UserCard = ({ user }: UserCardPropTypes) => {
  const [showProjectsList, setShowProjectsList] = useState(false);

  const toggleProjectsList = () => {
    setShowProjectsList(!showProjectsList);
  };

  const ChevronComponent = !showProjectsList ? ChevronDownIcon : ChevronUpIcon;

  const getUserJoinDateInProject = (joinAt: string | null) => {
    const readableDate = fromISOToReadableDate(joinAt || "");

    if (!readableDate) {
      return "";
    }

    return "Rejoins le " + readableDate;
  };

  return (
    <div>
      <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src={USER_CARD_RANDOM_IMAGE_URL}
            alt={user.firstname}
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-gray-900">{user.firstname}</p>
          <p className="truncate text-sm text-gray-500">{user.role}</p>
        </div>
        <button onClick={toggleProjectsList}>
          <ChevronComponent
            className="block h-6 w-6 flex-shrink-0"
            aria-hidden="true"
          />
        </button>
      </div>
      {showProjectsList ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-3">
          {user.projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={getUserJoinDateInProject(project.joinAt)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default UserCard;
