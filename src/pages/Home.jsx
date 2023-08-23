import useDocumentTitle from '@/hooks/useDocumentTitle';

function Home() {
  useDocumentTitle('홈');

  return (
    <div className="grid place-content-center bg-coverImg bg-center bg-cover min-h-[calc(100vh - 200px)]">
      <h2 className="text-white font-extralight tracking-widest uppercase text-4xl">
        Shop <span className="text-[60px] text-rose-400">.</span>
      </h2>
    </div>
  );
}

export default Home;
