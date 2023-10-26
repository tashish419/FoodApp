const Contact = () => {
  return (
    <div>
      <div className="bg-blue-950 p-8">
        <h2 className="text-4xl text-white text-center p-4">Contact Us</h2>
      </div>
      <div className=" p-4 m-8">
        <form>
            <input type="text" placeholder="emailId" className="border border-black p-1 mx-5"/>
            <input type="text" placeholder="Full name" className="border border-black p-1 mx-5"/>
            <input type="tel" placeholder="Phone" className="border border-black p-1 mx-5"/>
            <button type="submit" className=" bg-gray-200 rounded-lg px-2 py-1 hover:bg-gray-300 border border-black">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
