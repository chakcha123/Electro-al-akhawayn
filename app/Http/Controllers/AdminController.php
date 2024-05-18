<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Product;
use App\Models\Service;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

// UPDATE  users SET role = 'admin' WHERE id = 1;
class AdminController extends Controller
{
    public function ProductsIndex(Request $request)
    {
        $products = Product::paginate(10);
        $usersCount = User::count();
        $servicesCount = Service::count();
        $contactsCount = Contact::count();
        $productsCount = Product::count();
        return Inertia::render('admin/Dashboard', [
            'products' => $products,
            'usersCount'=>$usersCount,
            'servicesCount'=>$servicesCount,
            'contactsCount'=>$contactsCount,
            'productsCount'=>$productsCount,
        ]);

    }

    public function ServicesIndex(Request $request)
    {
        $services = Service::paginate(10);

        $usersCount = User::count();
        $servicesCount = Service::count();
        $contactsCount = Contact::count();
        $productsCount = Product::count();

        return Inertia::render('admin/Dashboardservices', [
            'services' => $services,
            'usersCount'=>$usersCount,
            'servicesCount'=>$servicesCount,
            'contactsCount'=>$contactsCount,
            'productsCount'=>$productsCount,
        ]);

    }

    public function ContactsIndex(Request $request)
    {
        $contacts = Contact::paginate(10);
        $usersCount = User::count();
        $servicesCount = Service::count();
        $contactsCount = Contact::count();
        $productsCount = Product::count();

        return Inertia::render('admin/Dashboardcontact', [
            'contacts' => $contacts,
            'usersCount'=>$usersCount,
            'servicesCount'=>$servicesCount,
            'contactsCount'=>$contactsCount,
            'productsCount'=>$productsCount,
        ]);
    }

    public function delete_contact($id)
    {
        $contact = Contact::findOrFail($id);
        $contact->delete();
        return redirect()->back();

    }

    public function ProductManagement(Request $request)
    {
        return Inertia::render('ProductManagement/Product');
    }

    public function ServiceManagement(Request $request)
    {
        $id = Service::max('id');
        return Inertia::render('ProductManagement/Service', [
            'id' => $id,
        ]);
    }


    public function create_service(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'sid' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
        ]);

        Service::create($validatedData);
        return redirect()->route('dashboard.services');
    }

// -----------------------------------------------------------------------------------

    public function create_product(Request $request)
    {
        Log::info('Received data: ', $request->all());

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:png,jpg,jpeg,webp,svg',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'quantity_in_stock' => 'required|numeric',
        ]);

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $originalName = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
            $extension = $file->getClientOriginalExtension();
            $timestamp = time();
            $filename = $originalName . '_' . $timestamp . '.' . $extension;
            $path = $file->storeAs('uploads', $filename, 'public');
            $validatedData['image'] = 'storage/uploads/' . $filename;
            Log::info('Image stored: ' . $validatedData['image']);
        }

        try {
            $product = Product::create($validatedData);
            Log::info('Product created successfully: ' . $product->id);
        } catch (\Exception $e) {
            Log::error('Failed to create product: ' . $e->getMessage());
            // Handle the error appropriately
        }

        return redirect()->route('dashboard.products');
    }


// -----------------------------------------------------------------------------------


    public function delete_service($id)
    {
        $service = Service::findOrFail($id);
        // $service = Service::where('sid', $id)->firstOrFail();
        $service->delete();
        return redirect()->back();

    }

    public function delete_product($id)
    {
        $product = Product::findOrFail($id);
        if ($product->image) {
            $oldImage = str_replace('storage/', '', $product->image);
            Storage::disk('public')->delete($oldImage);
            Log::info('Old image deleted: ' . $oldImage);
        }
        $product->delete();
        return redirect()->back();

    }

    public function edit_service($id)
    {
        $service = Service::findOrFail($id);
        return Inertia::render('admin/partials/EditService', [
            'service' => $service,
        ]);

    }



    // Method to handle the update action
    public function update_service(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|max:255',
            'description' => 'required',
            'price' => 'required|numeric',
        ]);

        $service = Service::findOrFail($id);
        $service->update($request->all());

        return redirect()->route('dashboard.services');
    }

    public function edit_product($id)
    {
        $product = Product::findOrFail($id);
        return Inertia::render('admin/partials/EditProduct', [
            'product' => $product,
        ]);

    }

    public function update_product(Request $request)
    {
        Log::info('Received data: ', $request->all());

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'required',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'quantity_in_stock' => 'required|numeric',
        ]);

        Log::info('validat data ');

        $id=$request->id ;
        $product = Product::findOrFail($id);
        Log::info('id : '.$id);
        // Log::info('Received file: ', $request->hasFile('image') ? 'Yes' : 'No');

        if ($request->hasFile('image')) {
            if ($product->image) {
                $oldImage = str_replace('storage/', '', $product->image);
                Storage::disk('public')->delete($oldImage);
                Log::info('Old image deleted: ' . $oldImage);
            }

            $file = $request->file('image');
            $originalName = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
            $extension = $file->getClientOriginalExtension();
            $timestamp = time();
            $filename = $originalName . '_' . $timestamp . '.' . $extension;
            $path = $file->storeAs('uploads', $filename, 'public');
            $validatedData['image'] = 'storage/uploads/' . $filename;
            Log::info('New image stored: ' . $validatedData['image']);
        }

        $product->update($validatedData);

        return redirect()->route('dashboard.products');
    }


    public function mail($id)
    {
        $contact = Contact::findOrFail($id);

        return Inertia::render('admin/partials/emails/contact', [
            'contact' => $contact,
        ]);
    }

    public function sendEmail(Request $request)
    {
        $validatedData = $request->validate([
            'content' => 'required',

        ]);

        $content = $request->content;
        $receiver = $request->receiver;
        $mail = new SampleMail($content);

        Mail::to($receiver)->send($mail);
    }

}
