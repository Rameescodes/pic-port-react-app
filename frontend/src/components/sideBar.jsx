import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/reducers/authSlice";
import { toast } from "sonner"
import { LayoutGrid, BellRing, MessageSquareText, UserPlus,  Bookmark, User, ListCollapse, LogOut, Search, ImagePlus } from 'lucide-react'
import { useLocation, useNavigate ,NavLink} from "react-router-dom";


function Sidebar() {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const selectUser = (state) => state.auth.user
  const user = useSelector(selectUser)

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("email");
    toast.info("logout successful")
    navigate("/login")
  }
  return (
    <>
    
      <aside className="fixed shadow-2xl z-30flex px-4 py-5 mt-16 overflow-none rounded-xl rtl:border-r-0 rtl:border-l bg-white  dark:border-gray-700">
                

                <div className=" justify-between flex-1 mt-5">
                    <nav> 
                        <NavLink
                            to={"/"}
                            className={`flex items-center px-4 py-2 ${location.pathname === "/"
                                ? "text-myViolet border-r-2 border-myViolet"
                                : "text-myText"
                                }`}
                        >
                              <LayoutGrid />
                            <span className="ml-5">Dashboard</span>
                        </NavLink>
                        <NavLink
                            className={`flex items-center px-4 mt-2 py-2 ${location.pathname === "/search"
                            ? "text-myViolet border-r-2 border-myViolet"
                            : "text-myText"
                            }  rounded-lg`}
                        to={"/search"}
                    >
                        <Search />
                        <span className="mx-5 ">Search</span>
                    </NavLink>
                    <NavLink
                            className={`flex items-center px-4 mt-2 py-2 ${location.pathname === "/notifications"
                                ? "text-myViolet border-r-2 border-myViolet"
                                : "text-myText"
                                }  rounded-lg`}
                            to={"/"}
                        >
                            <BellRing />
                            <span className="mx-5 ">Notifications</span>
                        </NavLink>
                        <NavLink
                            className={`flex items-center px-4 mt-2 py-2 ${location.pathname === "/messages"
                                ? "text-myViolet border-r-2 border-myViolet"
                                : "text-myText"
                                }  rounded-lg`}
                            to={"/chat"}
                        >
                            <MessageSquareText />
                            <span className="mx-5 ">Messages</span>
                        </NavLink>
                        <NavLink
                            className={`flex items-center px-4 mt-2 py-2 ${location.pathname === "/follow-requests"
                                ? "text-myViolet border-r-2 border-myViolet"
                                : "text-myText"
                                }  rounded-lg`}
                            to={"/follow-requests"}
                        >
                            <UserPlus />
                            <span className="mx-5 ">Requests</span>
                        </NavLink>
                        <NavLink
                            className={`flex items-center px-4 mt-2 py-2 ${location.pathname === "/saved-post"
                                ? "text-myViolet border-r-2 border-myViolet"
                                : "text-myText"
                                }  rounded-lg`}
                            to={"/saved-post"}
                        >
                            <Bookmark />
                            <span className="mx-5 ">Saved Posts</span>
                        </NavLink>
                        <NavLink
                            className={`flex items-center px-4 mt-2 py-2 ${location.pathname === "/profile"
                                ? "text-myViolet border-r-2 border-myViolet"
                                : "text-myText"
                                }  rounded-lg`}
                            to={"/profile"}
                        >
                            <User />
                            <span className="mx-5 ">Profile</span>
                        </NavLink>
                        <NavLink
                            className={`flex items-center px-4 mt-2 py-2 ${location.pathname === "/settings"
                                ? "text-myViolet border-r-2 border-myViolet"
                                : "text-myText"
                                }  rounded-lg`}
                            to={"/settings"}
                        >
                            {/* <ListCollapse /> */}
                            {/* <span className="mx-5 ">More</span> */}
                        </NavLink>
                        {/* Add more navigation links */}
                    </nav>
                </div>
                <div
                    onClick={handleLogout}
                    className="flex text-myText cursor-pointer mt-32 px-4"
                >
                    <LogOut />
                    <button className="mx-5 ">Logout</button>   
                </div>
            </aside>
    
    </>
  )
}


export default Sidebar;