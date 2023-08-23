import React from "react";
import "../assests/css/UserDetails.scss";
import Document from "./Document";

const UserDetails = () => {
  const datas = JSON.parse(localStorage.getItem("Data"));
  console.log(datas);

  return (
    <>
      <section className="profile">
        <div>
          <h1>User Profile</h1>
          <div className="grid-container">
            <div className="grid-item hover">
              <div className="user-photo">
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEA8PDw8QEA8QEBAQDw4QDxAYEBAXFRcXFxUSGBUYHSggGBolHRUWITElJSkrLi4uFx8zODMsNyotLisBCgoKDg0OGhAQFyslHR0tLS0rNisrLy8tKysrLSsrKy0tKy0tLS0rLS0rLS0tLS0tLS0tKy0tLS0tKy0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBAUHCAb/xABAEAABAwIDBQUECAQFBQAAAAABAAIDBBEFEiETMUFRYQYHInGBMpGhsRQjQnKCkqLBUmKy8DNTg9HxFSRDY+H/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIEAwX/xAAhEQEBAAIDAAICAwAAAAAAAAAAAQIRAyExQVETgQQSIv/aAAwDAQACEQMRAD8A7gEUKUBERAREQEREBERARFCAiIgIiwsYxWCkhdPUSCONvE7yeDQN5J5IMwrTV3azDoSWy11K1zRcx7eMv/KDdcZ7Zdv6mvcWRF8FIfCIWEh0g5yOAufug2896+SAawFx3k7jvHvWbk3MHfsM7yMLneIxO6JzjZpnjcxrjwGY6D1IX1wK8izVNzp6tNr/AA0PuXY+7Dt3G2COlrJCCH5IJXublyncxznHeCbDfp5JL9pcfp1dQiLTIoUqEBEKIIREVEIiIIVJVSgoilUlVKEFKlEQZalQpCiiIiAiIgIiICKEQEREBERAXCO9PGX1dW6NrjsILsijDtHOF88hHXd5ALuy8/8AeJhYgrqkEWY8l+Ya3zjNl89VnJvD18TPWZbtba/Etvb0KxDtHnRpd6LrnZLu/iDRNUND3uAIYR4WX19Svp/+iQM0ETB5MavG56+HvOPfteenRuFjYghX9ocmTgTcg3t0C7lVYbCAfqmflaubds8DEJ20TbMJs4AaAnpyVx5N3Rlxam4+47jsckeZ6OWR7hGwSRMeb5ADlcBfgNOmq60uLdxdI11TUTG944Q1otoc7hm16ZRp1XaV7RzUUIiqChSoQEREEIiKiFClQiIKpVRUIKUUogykRFFSiIgIihBKhEQEREBEUIJUIiAuT96OHiTEaRrTrUfR2OHD23gn8oH5QusL5XtXQbSqoHht8kud7+QYyXKPzOCxn43x+tdU9p6OnJY+Q3ZocjHO9NBvVUGLQ1AzxF1tPaaR81g9ocAE4cC54DhYNY7K3fv0F7+qudmsDFLE5p8QsbAkkDTqubfw7JJ61eO9qKeB2Q53uP2Y2F3x3BfPV+JxV0ctOI5YXPadmZG6OI1AuOOiu1eAsmllJDXZiRZ19Be9gOCz8LwIU7rt0va7QTl9xUljdxv6WO5DE8s5icwgVEAZG7S2eIue8HjfK4flXaVyvu2wXJWvLbmGAyyRkj2TICwt8vEfy3XVF08eX9ptxcuMxsk+hERejyQiIgKERAUIiogoiIiCoKkqCghERBlIiKKIiICIiAiIgIoRAREQERQgLGraYvykEAt5jf8A3ZZKKWbWXXb4XHsUcxzIYwNrJ7Jd7LQNC489+5JK7YMOdkrvDrJa4J8t/uCdqcHY6ZhexsjQSC1wvdj/ANwQFgTMEEbYzHBJGxuVmYSCS1rC7mnxEczrpz1XJerX0MP9SafK1WIkvL2RyRkOuZHaAjlY+m9bHDsZ22Q6G8jIzbcbkaha7GWxTktEMLI7tOSNnicRuBcSSRfXhwWTg7WtfC3T6sh55Zjx8gLrMk23l1O3V8FwOGjEghz+N13F7sx0vYDpqeq2SEou2STqPmW23dFCIqgoREBEUIChEVQUIiAVBUqCghERBlIiKKIiICKEQEREBERAUIiAiLFxDEYadm0qJo4WfxSPDQegvvPQIMpYGM4xT0cRnqZWxsGgv7Tz/C1u9zugXL+2PfDlJhwtocdzquVhy/6cZ3+bvcVy2vxSepftaiaSeQ/bkcTboBuaNNwACuh3egxV+IUzazJs9o+UwRu3tjZI6NoceJdkLvxcbLVYxXsAyyttyDgR6X4rZdhoNrg9A+AgvjjeCCdHkPcJGHl4gbdQOqyKgskaWubYjRzXDxNPKy5uSduriy6c6rsQYXZIG35kbh0usrCoXhwNsz3EBjf4nHcPL9tVuzhrQbhgGu+y32C4JsjtpB9YQQxv+WOJ+8fgNOaxjjcrqPTPKYzdaDEe2L8GroopS+ehqIGOewG8kD2ksdJHf7Js0lnPMRrcHoeB47S1se1pJ2TN4hp8bOjmHxNPmFwXvllJxCNnBlLGfzPk/wBgviaSrkhkbLDI+KVvsyRuLXt8iF1uF7BRcS7Jd8ssYbFiURmaNBVQhol/HHo13m0jyO9dTwDtVQ14/wC1qY5HWuYicszfON1nW62sg3KIoQERQgKERVBFCICIoQEREGSpUIooiIgIiICIoQEREBEWLidWIYJpjuiikkP4Wk/sg4t2370auSomp6F/0eCGR8e0YGmWbLoXZiDkbcG2WxtbXgOeVtbLM4vlkfI473Pe5zj5km5VuT/EuftC58/7KOC0LVlWFDwpCDtfc/itsLnjt4qWaQMvuO1s9v63OX1DMMdM1pkcRKP/ACAC7hydzC5t3J1n19VSnVkkTJg3rG61/wBbfcF2V2nyCxlJfWplrxoIaIx6mz5Gk2t7I5HXeVXRse3PmvY+LXgeJW5EIaL+9YmIzNjike7cGOc77rRc/BTHGRcsrfXnXvAxH6TiNU/7LHCFn3Yxl+Lsx9V86QsieYyPfK4WdI90jhyLyXEe8q1b4LbCLKppIIcCQ5pu1wJBaeYI3FEKo6h3W94NX9KhoauV1RDOdnHJKbyxPI8AznVzSQBY3N3DXfft68j4VV7GaGf/ACpoph/pvDh/SF62a8OAc03a4Ag8wdQpRKIoQFCKERKKEQERQgIiIMpERRRERARQiAiIgIoRAXx3exiWww2VoNnVD2QN9fG79LCPVfYri3fdipfVwUgJywQ7V3IvlO7zDWD86sHMaj7J5H56I8JLqHDmCqIX5mA8RcH0VEvGioCvAaKyQg+r7sK3Y4rSHhLtIHHo9hI/W1i9BO1e0cACT7rBeW6Cq2MsM3+TLHLp/I4Ot8F6ihkBs8ah5uDzFtFKL7uXRfE96GIbHDarnKwU4HPanK79OZfanmuN99+Ja01IOb5367reBmnW8nuUHLRoLo0afFDwHqpeVoUOKh5soCoe7xDpqgrby4bl6W7rsW+lYXTOcbyQg00mtzeLRpPUsyH1Xmdq693C4sA+qonH22tqIxzLLMk+Do/yqDsihSqUQRFCAihEEooRAUqEQZaKFKiihEQEREBQpUICIhQF5r7fVu2xWukvcbYxjyiaItPyfFeisTrW08E1Q82ZDFJK49GNLj8l5YrHlz3PcfE57nOPMkklWDGmNirdHveP5gff/wAKah1x1BVqkfd7vuj4H/6qM2ytuCvOCtOCChvJehu7/EDPhtC8nM4MMTz/ADRl0Z/p+K88ErrXcniWZlRSk/4csczByEgcD8WH3qUdVeLFg8yvN/eJiQqcTq3g3ZHIYWHpH4T+oOPqu/dp8UFJTT1PGGGVzRzdazB6usF5cvzJJ4km5PmeaQSOfNUPUuKtlULqgHxH0UlURusT6KC8At72Jxb6HX0lRezWTNEmumzfdkl/wuJ8wFohICqwFR69KhaPsNiv0vDqOcm73QtZIf8A2R/VyfqaVvFEQUQoghERAUKVCAiIqMtSiLKiIiCEUqEBERBCKVCD5DvWqzHhkwBttXxRE9M2Zw9Qwj1Xneofx6rrPfpiTi+logbMaw1Uo4uLi5kQ8vDJ7wuPyl1jbK1vlqtfAtVE28D3rHo3WkHW4UySbtyop/bB5XKg3JforbirUbySrkxsqLTl9V3X4oYMSgF/BPmheOGouw+8W/EvlLpFUOieyVntxvbIzzYQ4fJQdo78sU2dLT0wNjPIXvHNkQB/rcw/hK4kDYdTqV9T3kdoBX1jHRm8UcELW66ajaO/U8j8IXykjkEOcqbqCVSSqKiVRAdSl1v34VG3Caest9dJiNRBm5xiGNwB8nNcR95yg02QFTYtOhv0VbHAeagX5gqjtncNiokp6qlvrDK2ZrTwbKLEDpmjv+JdSXmLsHjrsPr4KgEiJzhDUt4GN5AJP3TZ34V6eURSoVShBFlCqUIIUKSoQERFRmIiLKiIiAiIghFKhAREQed++GvklxWeN3gbAyKFuW1y0N2mZxPG8h9LL4RzNL5ndN+q+l7eOdJiuIZgRapkBB3nKbN9MoC07mj9gBvWhq3sP8Pyut1g2BiXDsTrXeE0jqNsRJtcyPIkaBxNsqxXsVDXPaMrHuDXEOcwE5HFvslzdxtc2v1QI25dD6qiZ9yoyuvqdVQ5hv8A7IKlRILhV34LJpqGWc7OCJ8sht4Y2kkX3E8GjQ6nRQYBuN4ILtd3DgqF0NndzaFgkqHR1Tmgviyh0bCdzRY62533rAHdtVkSfX0oc02azPJ4upOXw+4rH5Mft6/hz+nxJKoJWfjWET0kgiqI8riMzSHBzXi9rhw0PzWAGErcu3nZrqoJXRqXB5KjsttYxc0eIzVEgG/Z5MryPLOHeTSuebA8NR8vRbODEqlsH0VtRK2mzOcYGvIjcXWzFzR7V7DfdEa9keuo+KuZLdPRXQOai6otPccrgTcEEXG8X424heuMKlL6ened74YnH8TAf3Xkh5AueG8r1b2UpXQ0FBC/2oqOmjd5tjaD8lBtFCqUIiFCqUFBSoUqEBERUZaIiyoiIgIiICIiCEUqEHH++bso8SHE4W5o3Na2rAGrC0WbMebS2wJ4ZRzNuUk+nPmV61e0EEEAggggi4IO8ELmeNdz8Ekj5KWpNM11yIHQ52McdwacwIZ016clZRxN7gN/o1UMud/uW67Tdk6zD3n6XEWsv4ahtzA7yfw8jY9Fpba6buJ5qi81g3q/Q4dJUSxwQtzyyuDI2cz+wABJPAAlWAV0TuvhjijmrpPbfPHh1PwLXSAOkcOuUtt5FS3UWTd02tN3d4dDGxlTeaU2D5jLKxua3sxtYQA3kTclfR02GQU0Wzp4mRMtdxaNT/M529x6lVVUd3OJ3bJzWjkXW8Q66fFY2G1rxG0ucHuF2PYbBwIvqD5a2PPeuXLO313Y8Uxm4moo2PttSS23gmabOYfMb2n++mmrYhC5zQ8ygizgdXC+gJ5jctlV4tG3SM5na5oNzuuh3H5/FfLV1cNZog0RPvmDja2mjgLcddOFgvPT17+XNcammdM9kzy8xOfG0ngAeA66FYgC2/a6PLUMNrGSnildffd+bQ9bALTXXbj4+bld2qgUJtqN3yVBHEKbnitMq9pdUlb/AADsXiFcGvp6SQxu3TvysiPUOeRmH3brpnZPuajjLZcSkEzgQRSwlwhH33mzn+QDR5qDnvYDshLidTGNm4Ukbw6pmIOTK03MQPFzrWsN17lembcvcqKanZExscTGxxsAayNjQ1jQOAaNAFcQQoVShEUlQqioKCkqFUqSghFClUZaIiyoiIgIiICIiAihEBERAI4HdxC8x9uWNGI1wY1rWipmAa0AAWcRoB5IisGmAablt221LDqPQqpuPzQNNNo+nMsdS2MktdHKwWbKx41a7Qb7jTdxUolH3De86nfTxmQGOpHtss5zN5F8wGoI6aH3qxX9v6YeOlL3vIBkaY9Bwt4rc+BRF53hx9e0/kZzpoqnt69z2yCAZxcEl9ri2jdBz1/5WjZ2knD5HObFKx7nP2MrC6JpLi7RoI58SpRamEnjGXJll7VvFMXlq3iWbJnDQ3wNIFrk8SeZWFmRFphK6f3GYTTVFTVmogjmdDFA+HaNDgwlzwXAHS+jfciIO8IiKAoRFQUIiIhQVCIIUFEQUoiKj//Z"
                  alt="profile_photo"
                />
              </div>
              <div className="user-data">
                <h1>{datas.name}</h1>
                <p className="user-email">{datas.email}</p>
                <p className="user-phone">{datas.phoneNumber}</p>
              </div>
            </div>
            <div className="grid-item hover aadhaar-dob-address">
              <div className="id">
                <p>
                  Customer Id:<span> 5413</span>{" "}
                </p>
              </div>
              <div className="aadhaar">
                <p>
                  Aadhaar: <span>{datas.aadhar}</span>
                </p>
              </div>
              <div className="dob">
                <p>
                  Date of Birth: <span>{datas.dob}</span>
                </p>
              </div>
              <div className="address">
                <p>
                  Address: <span>{datas.address}</span>
                </p>
              </div>
            </div>
            <div className="grid-item hover cibil">
              <p>
                Cibil Score: <span>750</span>
              </p>
            </div>
          </div>
        </div>

        <div className="document-section">
          <h1>Documents</h1>
          <div className=" grid-container">
            <div className="all-documents grid-item">
              <Document document="Aadhaar Card" isUploaded={false} />
              <Document document="Pan Card" isUploaded={true} />
              <Document document="Driving Licence" isUploaded={false} />
              <Document document="Smart Card" isUploaded={true} />
              <Document document="Voter Id" isUploaded={true} />
              <Document document="Land Documents" isUploaded={false} />
              <Document document="Other Documents" isUploaded={true} />
            </div>
            <div className="grid-item hover document-preview">
              <img
                className="document-image"
                src="https://aadhar-uidai.in/wp-content/uploads/2018/07/main-qimg-4a3032007d087580af4a6eff50634659.png"
                alt="document"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDetails;
