#!/usr/bin/env python3
import requests
import json
import time
import uuid
from datetime import datetime

# Get the backend URL from the frontend .env file
BACKEND_URL = "https://e6a8d0de-892c-41b8-a02f-f95a46a03653.preview.emergentagent.com/api"

def test_root_endpoint():
    """Test the root endpoint GET /api/"""
    print("\n=== Testing GET /api/ endpoint ===")
    
    try:
        response = requests.get(f"{BACKEND_URL}/")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        assert response.status_code == 200, f"Expected status code 200, got {response.status_code}"
        assert response.json() == {"message": "Hello World"}, "Response does not match expected format"
        
        print("✅ Root endpoint test passed!")
        return True
    except Exception as e:
        print(f"❌ Root endpoint test failed: {str(e)}")
        return False

def test_create_status_check():
    """Test the POST /api/status endpoint"""
    print("\n=== Testing POST /api/status endpoint ===")
    
    try:
        # Generate a unique client name for testing
        client_name = f"test_client_{uuid.uuid4()}"
        payload = {"client_name": client_name}
        
        response = requests.post(f"{BACKEND_URL}/status", json=payload)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        assert response.status_code == 200, f"Expected status code 200, got {response.status_code}"
        
        # Verify response structure
        data = response.json()
        assert "id" in data, "Response missing 'id' field"
        assert "client_name" in data, "Response missing 'client_name' field"
        assert "timestamp" in data, "Response missing 'timestamp' field"
        assert data["client_name"] == client_name, f"Expected client_name '{client_name}', got '{data['client_name']}'"
        
        print("✅ Create status check test passed!")
        return data["id"], client_name
    except Exception as e:
        print(f"❌ Create status check test failed: {str(e)}")
        return None, None

def test_get_status_checks(expected_id=None, expected_client_name=None):
    """Test the GET /api/status endpoint"""
    print("\n=== Testing GET /api/status endpoint ===")
    
    try:
        response = requests.get(f"{BACKEND_URL}/status")
        print(f"Status Code: {response.status_code}")
        print(f"Response contains {len(response.json())} status checks")
        
        assert response.status_code == 200, f"Expected status code 200, got {response.status_code}"
        
        # Verify response is a list
        data = response.json()
        assert isinstance(data, list), "Response is not a list"
        
        # If we have an expected ID and client name, verify it exists in the response
        if expected_id and expected_client_name:
            found = False
            for item in data:
                if item.get("id") == expected_id and item.get("client_name") == expected_client_name:
                    found = True
                    break
            
            assert found, f"Could not find status check with id={expected_id} and client_name={expected_client_name}"
            print(f"✅ Successfully found the created status check in the list!")
        
        print("✅ Get status checks test passed!")
        return True
    except Exception as e:
        print(f"❌ Get status checks test failed: {str(e)}")
        return False

def test_database_persistence():
    """Test that data is correctly persisted in the database"""
    print("\n=== Testing database persistence ===")
    
    # Create a new status check
    status_id, client_name = test_create_status_check()
    
    if not status_id or not client_name:
        print("❌ Database persistence test failed: Could not create status check")
        return False
    
    # Small delay to ensure data is saved
    time.sleep(1)
    
    # Verify the status check can be retrieved
    return test_get_status_checks(status_id, client_name)

def run_all_tests():
    """Run all API tests"""
    print("\n======================================")
    print("STARTING BACKEND API TESTS")
    print("======================================")
    print(f"Testing backend at: {BACKEND_URL}")
    print("======================================\n")
    
    tests = [
        ("Root Endpoint", test_root_endpoint),
        ("Database Persistence", test_database_persistence)
    ]
    
    results = {}
    all_passed = True
    
    for test_name, test_func in tests:
        print(f"\n--- Running Test: {test_name} ---")
        result = test_func()
        results[test_name] = result
        if not result:
            all_passed = False
    
    print("\n======================================")
    print("TEST RESULTS SUMMARY")
    print("======================================")
    
    for test_name, result in results.items():
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"{test_name}: {status}")
    
    print("\n======================================")
    if all_passed:
        print("🎉 ALL TESTS PASSED! Backend API is working correctly.")
    else:
        print("❌ SOME TESTS FAILED. See details above.")
    print("======================================\n")
    
    return all_passed

if __name__ == "__main__":
    run_all_tests()