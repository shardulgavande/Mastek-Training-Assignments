var display;
function Book(bookid,bookname,authorname){
    this.bid = bookid;
    this.bname = bookname;
    this.aname = authorname;
    this.display = function()
    {
        return this.bid+" "+this.bname+" "+this.aname;
    }
    
}

const book1 = new Book(101,"Journey of Mastek", "Mastekeers");
const show = document.getElementById("showdetails");
show.innerHTML= book1.display();