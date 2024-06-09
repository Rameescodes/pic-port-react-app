import { ImagePlus } from 'lucide-react'
import Story from '../components/story/Story'
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import AddPost from '../components/AddPost';
import HomePageShimmer from '../components/shimmerUi/homePageShimmer'
import { getPosts } from '../services/api/user/apiMethods';
import { toast } from 'sonner';
import Posts from '../components/Post';
import UserSuggestionBar from '../components/userSuggestionBar';


function HomePage() {
  const selectUser = (state) => state.auth.user
  const user = useSelector(selectUser)
  const userId = user._id || "";

  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    try {
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  }, [])

  const fetchPosts = () => {
    setLoading(true);
    getPosts({ userId: userId })
      .then((response) => {
        const postData = response.data
        setPosts(postData)
      })
      .catch((error) => {
        toast.error(error?.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <div className="flex flex-col h-full">
        <div>
          <div className=" ms-96 mt-6 w-12/12">
            <Story />
          </div>
          <div>
            <button onClick={() => setShowModal(true)} class="fixed bottom-8 right-32 mb-8 mr-8 bg-myViolet hover:bg-violet-900 text-black font-bold py-5 px-5 rounded-2xl shadow-xl shadow-gray-600">
              <ImagePlus size={30} />
            </button>
          </div>
        </div>

        {/* shimmer */}
        {loading ? (
          <div>
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index}>
                <HomePageShimmer />
              </div>
            ))}
          </div>
        ) : (
          <div>
            {posts.map((post) => (
              <Posts key={post._id} post={post} />
            ))}
          </div>
        )}
        {showModal && <AddPost setNewPost={setPosts} setShowModal={setShowModal} />}
      </div>
      <UserSuggestionBar />
    </>
  )
}

export default HomePage