function Root(props){
    return(
   <>
   <header className="h-20 shadow-xl">
   <div className="container mx-auto h-full flex flex-row justify-between items-center">
<h1 className="text-xl font-bold text-red-500">Cineplex</h1> 
<nav>
    <ul className="flex flex-row gap-6">
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="#">about</a>
        </li>
        <li>
            <a href="#">Movies</a>
        </li>
        <li>
            <a href="#">Condact</a>
        </li>
    </ul>
    </nav> 
</div>
   </header>
   <footer></footer>
   </>
   )
}
export default Root