import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon,
    HeartIcon,
    RssIcon
} from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className="p-5 text-sm border-r border-gray-700 ">
      <div className=" flex flex-col gap-4">
        <button className="icon flex gap-3 items-center text-white opacity-60 hover:text-white hover:opacity-100">
            <HomeIcon className="h-5 w-5"/> 
            <p className="font-light ">Home</p>
        </button>
        <button className="icon flex gap-3 items-center text-white opacity-60 hover:text-white hover:opacity-100">
            <SearchIcon className="h-5 w-5"/> 
            <p className="font-light ">Search</p>
        </button>
        <button className="icon flex gap-3 items-center text-white opacity-60 hover:text-white hover:opacity-100">
            <LibraryIcon className="h-5 w-5"/> 
            <p className="font-light ">Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-800"/>
      </div>
      
      <div className=" flex flex-col gap-4 my-4">
        <button className="icon flex gap-3 items-center text-white opacity-60 hover:text-white hover:opacity-100">
            <PlusCircleIcon className="h-5 w-5"/> 
            <p className="font-light ">Create Playlist</p>
        </button>
        <button className="icon flex gap-3 items-center text-white opacity-60 hover:text-white hover:opacity-100">
            <HeartIcon className="h-5 w-5"/> 
            <p className="font-light ">Liked Songs</p>
        </button>
        <button className="icon flex gap-3 items-center text-white opacity-60 hover:text-white hover:opacity-100">
            <RssIcon className="h-5 w-5"/> 
            <p className="font-light ">Your Episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-800"/>
      </div>
      
      {/* // Playlists - Will be rendered with the help of Spotify Api */}
      <div className="flex flex-col gap-4">
      <p className="cursor-pointer text-white opacity-60 hover:opacity-100">Playlist</p>
       <p className="cursor-pointer text-white opacity-60 hover:opacity-100">Playlist</p>
       <p className="cursor-pointer text-white opacity-60 hover:opacity-100">Playlist</p>
       <p className="cursor-pointer text-white opacity-60 hover:opacity-100">Playlist</p>
       <p className="cursor-pointer text-white opacity-60 hover:opacity-100">Playlist</p>
       <p className="cursor-pointer text-white opacity-60 hover:opacity-100">Playlist</p>
       <p className="cursor-pointer text-white opacity-60 hover:opacity-100">Playlist</p>
       <p className="cursor-pointer text-white opacity-60 hover:opacity-100">Playlist</p>
      </div>
     
    </div>
    
    
  )
}

export default Sidebar


