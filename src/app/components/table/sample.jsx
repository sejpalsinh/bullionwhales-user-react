import React, { useState, useMemo, useEffect } from "react";
import DataTable from "react-data-table-component";
import { createDataTableTheme } from "../../user-pages/ui-helper";
import { Form } from "react-bootstrap";
import '../../user-pages/userpages.css';
import { formatStanderdTimeString } from "../../../Util/helper_functions";

function AllReferralTable(props) {
    const [tableDataFormatted, setTableDataFormatted] = useState([]); // State to store the formatted data for the table display
    const rawUserMap = useMemo(() => new Map(), []); // Manage raw data map for search functionality

    const [searchById, setSearchById] = useState('');
    const [searchByName, setSearchByName] = useState('');
    const [searchByNumber, setSearchByNumber] = useState('');
    const [searchByEmail, setSearchByEmail] = useState('');
    const [searchByCreateTime, setSearchByCreateTime] = useState('');

    // Simulate fetching the data for the table
    useEffect(() => {
        const jsonArr = Object.values(props.allReferralUsers); // Convert referral data from props to an array
        setTableData(jsonArr); // Format and store the data in state
        jsonArr.forEach((obj, index) => {
            rawUserMap.set(index, obj);
        });
    }, []);

    // Function to format and store the table data for display
    function setTableData(tableData) {
        const rowTableData = tableData.map((obj, index) => getRowFormatTable(index, obj));
        setTableDataFormatted(rowTableData);
    }

    // Function to format each row's data for DataTable
    function getRowFormatTable(index, { us_create_time, us_first_name, us_last_name, us_mobile_no, us_email }) {
        const formattedCreateTime = formatStanderdTimeString(us_create_time);
        return {
            index: index + 1,
            name: `${us_first_name} ${us_last_name}`,
            us_mobile_no,
            us_email,
            us_create_time: formattedCreateTime,
        };
    }

    // Function to handle individual column filtering
    const handleColumnSearch = () => {
        const filteredData = Array.from(rawUserMap.values()).filter((value) => {
            return (
                (!searchById || (value.index && value.index.toString().includes(searchById))) &&
                (!searchByName || (value.us_first_name?.toLowerCase().includes(searchByName.toLowerCase()) ||
                    value.us_last_name?.toLowerCase().includes(searchByName.toLowerCase()))) &&
                (!searchByNumber || value.us_mobile_no?.toString().includes(searchByNumber)) &&
                (!searchByEmail || value.us_email?.toLowerCase().includes(searchByEmail.toLowerCase())) &&
                (!searchByCreateTime || formatStanderdTimeString(value.us_create_time)?.toLowerCase().includes(searchByCreateTime.toLowerCase()))
            );
        });

        setTableDataFormatted(filteredData.map((obj, index) => getRowFormatTable(index, obj)));
    };

    // Columns for DataTable
    const columns = [
        {
            name: (
                <>
                    Id
                    <Form.Control
                        type="text"
                        placeholder="Search Id"
                        value={searchById}
                        onChange={(e) => {
                            setSearchById(e.target.value);
                            handleColumnSearch();
                        }}
                        className="mb-2 searchbox-style"
                    />
                </>
            ),
            selector: (row) => row.index,
            sortable: true,
            maxWidth: "80px",
            minWidth: "80px"
        },
        {
            name: (
                <>
                    Name
                    <Form.Control
                        type="text"
                        placeholder="Search Name"
                        value={searchByName}
                        onChange={(e) => {
                            setSearchByName(e.target.value);
                            handleColumnSearch();
                        }}
                        className="mb-2 searchbox-style"
                    />
                </>
            ),
            selector: (row) => row.name,
            sortable: true
        },
        {
            name: (
                <>
                    Number
                    <Form.Control
                        type="text"
                        placeholder="Search Number"
                        value={searchByNumber}
                        onChange={(e) => {
                            setSearchByNumber(e.target.value);
                            handleColumnSearch();
                        }}
                        className="mb-2 searchbox-style"
                    />
                </>
            ),
            selector: (row) => row.us_mobile_no,
            sortable: true
        },
        {
            name: (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span>Email</span>
                <Form.Control
                    type="text"
                    style={{
                        width:'200px'
                    }}
                    placeholder="Search Email"
                    value={searchByEmail}
                    onChange={(e) => {
                        setSearchByEmail(e.target.value);
                        handleColumnSearch();
                    }}
                    className="mb-2 mt-3 searchbox-style"
                />
            </div>
            ),
            selector: (row) => row.us_email,
            sortable: true
        },
        {
            name: (
                <>
                    Create Time
                    <Form.Control
                        type="text"
                        placeholder="Search Create Time"
                        value={searchByCreateTime}
                        onChange={(e) => {
                            setSearchByCreateTime(e.target.value);
                            handleColumnSearch();
                        }}
                        className="mb-2 searchbox-style"
                    />
                </>
            ),
            selector: (row) => row.us_create_time,
            sortable: true,
            wrap: true
        }
    ];

    // Create a custom theme for the DataTable
    createDataTableTheme();

    return (
        <div className="table-responsive mt-3">
            <DataTable
                columns={columns}
                data={tableDataFormatted}
                pagination
                paginationComponentOptions={{
                    selectAllRowsItem: true,
                    selectAllRowsItemText: 'All',
                }}
                paginationPerPage={10}
                highlightOnHover
                noHeader
                theme="solarized"
            />
        </div>
    );
}

export default AllReferralTable;
