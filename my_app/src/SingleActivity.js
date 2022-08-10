import React from 'react';

export default function SingleActivity(props) {


    return (
        props.listActivities.map((act) => (

            <tr key = {act.id}>
                <td>
                    <select>
                        <option>{act.clientName}</option>
                    </select>
                </td>
                <td>
                    <select>
                        <option>{act.projectName}</option>
                    </select>
                </td>
                <td>
                    <select>
                        <option>{act.categoryName}</option>
                    </select>
                </td>
                <td>
                    <input type="text" value={act.description} className="in-text medium" />
                </td>
                <td className="small">
                    <input type="text" value={act.time} className="in-text xsmall" />
                </td>
                <td className="small">
                    <input type="text" value={act.overtime} className="in-text xsmall" />
                </td>
            </tr>

        ))



    )
}