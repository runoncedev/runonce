import Button from "@/components/Button";

export default function Edit() {
  return (
    <main className="mx-auto w-full max-w-(--breakpoint-md) px-4 py-4">
      <form className=" flex flex-col gap-4">
        <div>
          <label htmlFor="profileImage">Image</label>
          <input id="profileImage" name="profileImage" type="file" />
          {/* <Button variant="destructive" className="mt-4 w-full">
            Delete current image
          </Button> */}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" placeholder="John Doe" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" placeholder="Software engineer" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="subtitle">Subtitle</label>
          <input
            id="subtitle"
            name="subtitle"
            placeholder="React, Node.js, SQL"
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="w-full sm:w-fit">
            Update profile
          </Button>
        </div>
      </form>
    </main>
  );
}
