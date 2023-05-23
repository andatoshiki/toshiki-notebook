# Configure rclone for R2

Example of how to configure `rclone` to use R2.

You must [generate an Access Key](https://developers.cloudflare.com/r2/data-access/s3-api/tokens/) before getting started. All examples will utilize `access_key_id` and `access_key_secret` variables which represent the **Access Key ID** and **Secret Access Key** values you generated.

With `[rclone](https://rclone.org/install/)` installed, you may run `[rclone config](https://rclone.org/s3/)` to configure a new S3 storage provider. You will be prompted with a series of questions for the new prvider details.

If you have already configured `rclone` in the past, you may run `rclone config file` to print the location of your `rclone` configuration file:

```bash
$ rclone config file
# Configuration file is stored at:
# ~/.config/rclone/rclone.conf
```

Then use an editor (`nano` or `vim`, for example) to add or edit the new provider. This example assumes you are adding a new `r2demo` provider:

```bash
[r2demo]
type = s3
provider = Cloudflare
access_key_id = abc123 # Your access_key_id
secret_access_key = xyz456 # Your access_key_secret
endpoint = https://<accountid>.r2.cloudflarestorage.com
acl = private
```

You may then use the new `rclone` provider for any of your normal workflows.

## List buckets & objects

The [rclone tree](https://rclone.org/commands/rclone_tree/) command can be used to list the contents of the remote, in this case Cloudflare R2.

```bash
$ rclone tree r2demo:
# /
# ├── user-uploads
# │   └── foobar.png
# └── my-bucket-name
#     ├── cat.png
#     └── todos.txt

$ rclone tree r2demo:my-bucket-name
# /
# ├── cat.png
# └── todos.txt
```

## Upload and retrieve objects

The [rclone copy](https://rclone.org/commands/rclone_copy/) command can be used to upload objects to an R2 bucket and vice versa - this allows you to upload files up to the 5 TB maximum object size that R2 supports.

```bash
# Upload dog.txt to the user-uploads bucket
$ rclone copy dog.txt r2demo:user-uploads/dog.txt
$ rclone tree r2demo:user-uploads
# /
# ├── foobar.png
# └── dog.txt

# Download dog.txt from the user-uploads bucket
$ rclone copy r2demo:user-uploads/dog.txt dog.txt
```

## Generate presigned URLs

You can also generate presigned links which allow you to share public access to a file temporarily using the [rclone link](https://rclone.org/commands/rclone_link/) command.
