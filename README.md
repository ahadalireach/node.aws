# node.aws

A simple Node.js application deployed on AWS EC2 to demonstrate the ease of setting up and running a Node.js server on AWS.

## Benefits of Using AWS EC2

Using **AWS EC2** for hosting your Node.js application offers several benefits:

- **Scalability**: Easily scale your application based on traffic and resource demands.
- **Reliability**: EC2 instances are hosted on Amazon's robust and secure cloud infrastructure.
- **Cost-effective**: With flexible pricing models (including free tier for small projects), you can start small and scale as needed.
- **Global Reach**: Deploy your application in different AWS regions around the world to reduce latency and enhance user experience.

## Setup Instructions

Follow these steps to get your **Node.js application** running on your AWS EC2 instance.

### 1. Install Node.js and NPM Using NVM

First, install **NVM (Node Version Manager)** and then use it to install the latest version of Node.js:

```bash
sudo su -
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh  # Activate NVM
nvm install node  # Install Node.js
node -v  # Check Node.js version
npm -v  # Check npm version
```

### 2. Install Git and Clone the Repo

**Install Git:**

```bash
sudo apt-get update -y
sudo apt-get install git -y
```

**Clone the `node.aws` Repository:**

```bash
git clone https://github.com/ahadalireach/node.aws.git
cd node.aws  # Navigate to the project directory
```

### 3. Install Dependencies

**To install the required dependencies, run:**

```bash
npm install
```

### 4. Start the Application

**Start the Node.js server by running:**

```bash
npm start
```

### 5. Access Your Application

Go to your instance's public IP address to check if the application works. The URL should look like this: `http://<your-ec2-public-ip>`.

---

## Troubleshooting: If the Application is Not Accessible

If your application is not accessible via the public URL, follow these steps to ensure the security group is correctly configured:

### Go to AWS Console:

- Open the **Amazon EC2 Console**.
- Navigate to **Instances** and select your EC2 instance.

### Edit the Security Group:

- In the instance details, find the **Security** section and click on the security group name (e.g., `sg-xxxxxxxx`).
- Click on the **Inbound Rules** tab, then click the **Edit inbound rules** button.

### Add a New Rule:

- Click **Add Rule** and set the following:
  - **Type**: HTTP
  - **Protocol**: TCP
  - **Port Range**: 80
  - **Source**: 0.0.0.0/0 (This allows access from any IP. You can restrict it to specific IPs if needed).

### Save the Rules:

- Click **Save rules**.

### Test Access Again:

- After updating the security group, wait a few moments and try accessing the application again via your EC2 instance's public IP.
