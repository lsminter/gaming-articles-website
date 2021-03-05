
export default function Footer() {
  return(
    <footer className="w-full text-center border-t border-grey p-4">
      <div className="flex justify-between">
        <div>
          <a className="ml-2 mr-2 hover:text-gray-600" href="https://lucasminter.dev">
            My Blog
          </a>
        </div>
        <div className="flex flex-wrap items-center">
          <div>
            <a className="ml-2 mr-2 hover:text-gray-600" href="https://twitter.com/LucasMinter2">
              Twitter
            </a>
          </div>
          <div>
            <a className="ml-2 mr-2 hover:text-gray-600" href="https://github.com/lsminter">
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}