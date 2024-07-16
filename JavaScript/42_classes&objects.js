class Railwayform {
  submit_form = () => {
    alert("Form Submitted Successfully");
  };
  cancel_form = () => {
    alert("Form Cancelled");
  };
}
let cust_one = new Railwayform();
let cust_two = new Railwayform();

cust_one.submit_form();
cust_two.submit_form();
cust_one.cancel_form();
