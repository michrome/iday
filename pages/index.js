export default function Home({ ssrDate }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:p-6">
            HELLO This page was server-side rendered on {ssrDate}.
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const ssrDate = dateAndTime();
  console.log(`This is a console.log from getServerSideProps on ${ssrDate}.`);
  return { props: { ssrDate } };
}

function dateAndTime() {
  const date = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(date);
  return formattedDate;
}
