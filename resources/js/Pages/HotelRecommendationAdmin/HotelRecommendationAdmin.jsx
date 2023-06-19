import React, { useState } from 'react';
import notFound from '@/Assets/404.jpg'

export default function HotelRecommendationAdmin({ auth }) {
      
    return (
        <div className="row">
        <div className='cards  w-full bg-green-500'>
            <div className="card  bg-purple-500" style={{ width:'800px', }}>
                <div className="card-content">
                <div className="overflow-x-auto">
                <table className="table ">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>

                        <td>
                            <div className=" items-center space-x-3">
                                <div>
                                <div className="font-bold">Aryaduta hotel </div>
                                <div className="text-sm opacity-50">Medan</div>
                                </div>
                            </div>
                        </td>
                        <td> 
                            <div className="">
                               <img src={notFound} className="w-12 h-12" alt="" srcset="" /> 
                            </div>
                        </td>
                        <th className="grid grid-cols-3 gap-4">
                            <i className="fa fa-eye"></i>
                            <i className="fa fa-edit"></i>
                            <i className="fa fa-trash"></i>
                        </th>
                    </tr>
                    
                    </tbody>
                    {/* foot */}
                    <tfoot>
                    </tfoot>
                    
                </table>
                </div>
                </div>
            </div>
        </div>
        </div>
            
    );
}