<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Department;
use DB;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $employees = Employee::select('employee.*','departments.name as department')
        ->join('departments','departments.id','=','employees.department_id')
        ->paginate(10);
        return response()->json($employees);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $rules = [
            'name'=>'required|string|min:1|max:100',
            'email'=>'required|email|max:80',
            'phone'=>'required|max:15',
            'department_id'=>'required|numeric',
            ];
        $validator = \Validator::make($request->input(),$rules);
        if($validator->fails()){
            return response()->json([
                'status' => false,
                'error' => $validator->errors()->all()
            ],400);
        }
        $employee = new Employee($request->input());
        $empĺoyee->save();
        return response()->json([
            'status' =>true,
            'message' =>'Employe created '
        ],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
         return response()->json(['status' => true,'data'=>$employee]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Employee $employee)
    {
        $rules = [
            'name'=>'required|string|min:1|max:100',
            'email'=>'required|email|max:80',
            'phone'=>'required|max:15',
            'department_id'=>'required|numeric',
            ];
        $validator = \Validator::make($request->input(),$rules);
        if($validator->fails()){
            return response()->json([
                'status' => false,
                'error' => $validator->errors()->all()
            ],400);
            $employee->update($request->input());
            return response()->json([
                'status' => true,
                'message'=>'Employee updated successfully'
            ],200);
        }
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
      $employee->delete();
      return response()->json([
        'status'=>true,
        'message'=> 'Employee deleted'
      ],200);
    }
    public function EmployeesDepartment(){
        $employees = Employee::select(DB::raw('count(employees.id) as count'))
        ->join('departments','departments.id','=','employees.id')
        ->groupBy('departments.name')->get();
        return response()->json($employees);
    }
    public function all(){
        $employees = Employee::select(DB::raw('count(employees.id) as count'))
        ->join('departments','departments.id','=','employees.id')->get();
        return response()->json($employees);
    }
}
