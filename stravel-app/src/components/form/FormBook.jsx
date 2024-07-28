"use client";
import "./styleFormBook.css";
import { countries } from "../../containts/countries";
import FindBook from "../button/FindBook";
export default async function FormBook() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="form_book py-5 px-3 rounded-3 mt-3 boxshadow">
      <form>
        <label htmlFor="information_book" className="text-2xl">
          Hãy liên lệ với tôi bằng
        </label>
        <input
          type="text"
          placeholder="Email hoặc số điện thoại"
          className="outline-1 px-2 form-control my-1"
          id="information_book"
          name="information"
        />
        <label htmlFor="address_details" className="text-2xl">
          Tôi muốn đến
        </label>
        <select
          name="countries"
          id="countries_book"
          className="outline-0 form-control border-0"
        >
          {countries.map((country, index) => (
            <option value={country.continent} key={index}>
              {country.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Địa điểm chính xác"
          className="form-control my-1 px-2"
          name="address_details"
          id="address_details"
        ></input>
        <label htmlFor="number_people">Chúng tôi có</label>
        <input
          type="number"
          name="number_people"
          id="number_people"
          className="form-control my-1 px-2"
          defaultValue={1}
        />
        <label htmlFor="date1" className="text-2xl">
          Ngày bắt đầu
        </label>
        <input
          type="date"
          name="date1"
          id="date1"
          className="form-control my-1 px-2"
        ></input>
        <label htmlFor="data2" className="text-2xl">
          Ngày kết thúc{" "}
        </label>
        <input
          type="date"
          name="date2"
          id="date2"
          className="form-control my-1 px-2"
        />
        <FindBook onClick={handleSubmit} />
      </form>
    </div>
  );
}
