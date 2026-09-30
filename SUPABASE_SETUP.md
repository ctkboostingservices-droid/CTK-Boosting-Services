# CTK Admin Panel – Supabase Setup

This package currently includes a working **demo admin panel**. It stores edits in browser localStorage so you can test the complete add/edit/delete workflow immediately.

## Demo login
Username: `admin`
Password: `ctk12345`

## Production connection later
1. Create a Supabase project.
2. Run `supabase-schema.sql` in Supabase SQL Editor.
3. Create an admin user under Authentication → Users.
4. Replace the demo authentication in `admin.js` with Supabase Auth.
5. Replace localStorage read/write functions in `app-data.js` with Supabase queries.
6. Enable Row Level Security and admin-only policies before going live.

Do not publish a Supabase service-role key in frontend files.
