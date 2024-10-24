import { IPaginatedTableProps } from '../../../types/components/common/tables/IPaginatedTableProps';
 
export const PaginatedTable = (props: IPaginatedTableProps) => {

    const tableHeader = props.header || (props.data.length > 0 ? Object.keys(props.data[0]) : []);
    const pageCount = (props.activePage * props.pageLength) / props.pageLength;
    const showStart = (props.maxPage > 0 ? pageCount + 1 : 0);
    const showEnd = props.activePage == 0 ? 
                        (props.pageLength > props.maxPage ? 
                            props.maxPage : props.pageLength) : 
                            (props.activePage + props.pageLength) > props.maxPage ? 
                                props.maxPage : 
                            (props.activePage + props.pageLength);

    return(
        <>
            <div className="card-body">
                {props.disabledSearch ? 
                    <div className="form-group col-md-3 float-right form-inline">
                    <label className="mr-2">Search:</label>
                    <input type="text" className="form-control" onChange={props.handleSearchInput} />
                </div>
                :
                <></>
                }

                <div className="table-responsive">
                    <table className="table table-bordered" width="100%" cellPadding="0">
                        <thead>
                            <tr>
                                {tableHeader.map((col) => (
                                    <th key={col}>{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {props.tableBody}
                        </tbody>
                    </table>
                </div>

                <div className = "container">
                    <div className="row">
                        <div className="col-sm-12 col-md-5">
                            <div className="" id="dtWishList_info" role="status" aria-live="polite">
                                Showing {showStart} to {showEnd} of {props.maxPage} entries
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-7">
                            <div className="input-group mb-3 col-md-5 float-right">
                                <div className="input-group-prepend">
                                    <button className="btn btn-outline-secondary" type="button" onClick = {props.handleClickPrev} disabled={props.disabledPrev}>Previous</button>
                                </div>

                                <div className="input-group-append" >
                                    <button className="btn btn-outline-secondary" type="button" onClick = {props.handleClickNext} disabled={props.disabledNext}>Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}