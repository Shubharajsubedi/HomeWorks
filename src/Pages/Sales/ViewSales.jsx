
import { useEffect, useState } from "react";
import { deleteSales, getSales } from "../../Api/SalesAPI";
import { Link, useSearchParams } from "react-router-dom";

const ViewSales = () => {

    const [sales, setSales] = useState([]);

    // URL query parameters
    const [searchParams, setSearchParams] = useSearchParams();

    // Get ?name= from URL
    const query = searchParams.get("name") || "";

    // Input state
    const [searchTerm, setSearchTerm] = useState(query);

    // Get sales
    useEffect(() => {

        const fetchData = async () => {

            try {

                const res = await getSales();

                setSales(res.data);

            } catch (error) {

                console.log(error);

            }

        };

        fetchData();

    }, []);

    // Search form
    const handleSearch = (e) => {

        e.preventDefault();

        setSearchParams({
            name: searchTerm
        });

    };

    // Delete
    const deleteSale = async (id) => {

        try {

            const res = await deleteSales(id);

            console.log("Successfully Deleted", res.data);

            setSales(
                sales.filter((sls) => sls.id !== id)
            );

        } catch (error) {

            console.log(error);

        }

    };

    // Filter sales based on customer name
    const filteredSales = sales.filter((sls) =>
        sls.customerName
            .toLowerCase()
            .includes(query.toLowerCase())
    );

    return (
        <div>

            <h2>Search Customer</h2>

            <form onSubmit={handleSearch}>

                <label htmlFor="search">
                    Customer Name:
                </label>

                <input
                    id="search"
                    type="text"
                    value={searchTerm}
                    onChange={(e) =>
                        setSearchTerm(e.target.value)
                    }
                    placeholder="Enter customer name"
                />

                <button type="submit">
                    Search
                </button>

                <button
                    type="button"
                    onClick={() => {
                        setSearchTerm("");
                        setSearchParams({});
                    }}
                >
                    Clear
                </button>

            </form>

            <p>
                Searching for: <strong>{query}</strong>
            </p>

            <hr />

            <h2>Daily Sales</h2>

            <Link to="/viewsales/submit">
                <button>Add New Sales</button>
            </Link>

            <br />
            <br />

            <table border="2" cellPadding="10">

                <thead>

                    <tr>
                        <th>Customer Name</th>
                        <th>Product Name</th>
                        <th>Number</th>
                        <th>Actions</th>
                    </tr>

                </thead>

                <tbody>

                    {filteredSales.length > 0 ? (

                        filteredSales.map((sls) => (

                            <tr key={sls.id}>

                                <td>
                                    {sls.customerName}
                                </td>

                                <td>
                                    {sls.productName}
                                </td>

                                <td>
                                    {sls.number}
                                </td>

                                <td>

                                    <Link
                                        to={`/viewsales/edit/${sls.id}`}
                                    >
                                        <button>
                                            Edit
                                        </button>
                                    </Link>

                                    <button
                                        onClick={() =>
                                            deleteSale(sls.id)
                                        }
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))

                    ) : (

                        <tr>

                            <td colSpan="4">
                                No sales found for "{query}"
                            </td>

                        </tr>

                    )}

                </tbody>

            </table>

        </div>
    );
};

export default ViewSales;

