import { Command } from "cmdk";
import {
  Home,
  User,
  FolderGit2,
  Briefcase,
  Mail,
  Wrench,
} from "lucide-react";
import { useNavigate } from "react-router-dom"

export const CommandPalette = ({ onClose }) => {
  const navigate=useNavigate();
  const commands = {
    navigate: [
      {
        label: "cd ~/home",
        icon: <Home size={16} />,
        action:()=>{
          navigate("/")
        }
        
      },
      {
        label: "cd ~/about",
        icon: <User size={16} />,
         action:()=>{
          navigate("/about")
        }
        
      },
      {
        label: "cd ~/skills",
        icon: <Wrench size={16} />,
         action:()=>{
          navigate("/skills")
        }
        
      },
      {
        label: "cd ~/projects",
        icon: <FolderGit2 size={16} />,
         action:()=>{
          navigate("/projects")
        }
       
      },
      {
        label: "cd ~/experience",
        icon: <Briefcase size={16} />,
       
      },
      {
        label: "cd ~/contact",
        icon: <Mail size={16} />,
         action:()=>{
          navigate("/contact")
        }
        
      },
    ],

    projects: [
      {
        label: "Ai-LMS-platform",
        action:()=>{
          navigate("/projects")
        }

        
      },
      {
        label: "AI Prepliot",
        action:()=>{
          navigate("/projects")
        }
        
      },
    ],
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center pt-24">
      <div className="w-full max-w-2xl m-5">
        <Command
          className="
           bg-[#0d0d0d]
            border-3
            border-white
            border-b-lime-500
           
            text-white
            overflow-hidden
          "
        >
          {/* Search Input */}
          <div className="flex items-center border-b border-zinc-700 px-4 py-3 ">
            <span className="text-lime-500 font-bold mr-2">$</span>

            <Command.Input
              autoFocus
              placeholder="type a command..."
              className="
                flex-1
                bg-transparent
                outline-none
                text-lg
                placeholder:text-zinc-500
              "
            />

            <button
              onClick={onClose}
              className="
                border
                border-zinc-500
                px-2
                py-1
                text-xs
                cursor-pointer
              "
            >
              ESC
            </button>
          </div>
 
          {/* Results */}
          <Command.List className="max-h-[500px] overflow-y-auto p-4">
            <Command.Empty className="py-6 text-zinc-500">
              No command found.
            </Command.Empty>

            <Command.Group>
              <div className="text-lime-400 text-sm font-bold mb-3">
                NAVIGATE
              </div>

              {commands.navigate.map((item) => (
                <Command.Item
                  key={item.label}
                  value={item.label}
                  onSelect={() => {
                    item.action();
                    onClose();
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                    px-3
                    py-3
                    rounded
                    cursor-pointer
                    text-zinc-200
                    data-[selected=true]:border-2 border-lime-300
                    data-[selected=true]:text-white
                    mb-1
                  "
                >
                  {item.icon}
                  {item.label}
                </Command.Item>
              ))}
            </Command.Group>

            <div className="my-6 border-t border-zinc-800" />

            <Command.Group>
              <div className="text-lime-400 text-sm font-bold mb-3">
                PROJECTS
              </div>

              {commands.projects.map((item) => (
                <Command.Item
                  key={item.label}
                  value={item.label}
                  onSelect={() => {
                    item.action();
                    onClose();
                  }}
                  className="
                    px-3
                    py-3
                    rounded
                    cursor-pointer
                    text-zinc-200
                    data-[selected=true]:border-2 border-lime-300
                    data-[selected=true]:text-white
                    mb-1
                  "
                >
                  {item.label}
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
};